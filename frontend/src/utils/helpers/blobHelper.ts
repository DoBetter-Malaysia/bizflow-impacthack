export function blobToWav(blob: Blob): Promise<Blob> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();

    reader.onloadend = function () {
      let arrayBuffer = reader.result;
      if (arrayBuffer == null) throw new Error("array buffer is empty.");

      if (typeof arrayBuffer == "string") {
        var enc = new TextEncoder();
        arrayBuffer = enc.encode(arrayBuffer);
      }

      const audioContext = new window.AudioContext();
      audioContext.decodeAudioData(arrayBuffer, function (buffer) {
        const wavBuffer = bufferToWav(buffer);
        resolve(wavBuffer);
      });
    };

    reader.onerror = function (error) {
      reject(error);
    };

    reader.readAsArrayBuffer(blob);
  });
}

export function bufferToWav(buffer: AudioBuffer) {
  const numberOfChannels = buffer.numberOfChannels;
  const sampleRate = buffer.sampleRate;
  const length = buffer.length * numberOfChannels * 2 + 44;
  const arrayBuffer = new ArrayBuffer(length);
  const view = new DataView(arrayBuffer);

  writeString(view, 0, "RIFF"); // ChunkID
  view.setUint32(4, length - 8, true); // ChunkSize
  writeString(view, 8, "WAVE"); // Format

  // Subchunk1
  writeString(view, 12, "fmt "); // Subchunk1ID
  view.setUint32(16, 16, true); // Subchunk1Size
  view.setUint16(20, 1, true); // AudioFormat (PCM)
  view.setUint16(22, numberOfChannels, true); // NumChannels
  view.setUint32(24, sampleRate, true); // SampleRate
  view.setUint32(28, sampleRate * 2 * numberOfChannels, true); // ByteRate
  view.setUint16(32, numberOfChannels * 2, true); // BlockAlign
  view.setUint16(34, 16, true); // BitsPerSample

  // Subchunk2
  writeString(view, 36, "data"); // Subchunk2ID
  view.setUint32(40, length - 44, true); // Subchunk2Size

  const channels = [];
  for (let channel = 0; channel < numberOfChannels; channel++) {
    channels.push(buffer.getChannelData(channel));
  }

  let offset = 44;
  for (let i = 0; i < buffer.length; i++) {
    for (let channel = 0; channel < numberOfChannels; channel++) {
      const sample = channels[channel][i];
      view.setInt16(offset, sample * 0x7fff, true);
      offset += 2;
    }
  }

  return new Blob([view], { type: "audio/wav" });
}

export function writeString(view: DataView, offset: number, string: string) {
  for (let i = 0; i < string.length; i++) {
    view.setUint8(offset + i, string.charCodeAt(i));
  }
}
