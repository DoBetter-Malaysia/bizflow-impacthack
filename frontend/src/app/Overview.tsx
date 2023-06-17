import { DASHBOARD_CARDS } from "@/app/data/";
import DashboardCard from "@/components/cards/DashboardCard";
import AreaChartComponent from "@/components/charts/AreaChartComponent";
import BarChartComponent from "@/components/charts/BarChartComponent";
import { AudioRecorder } from "react-audio-voice-recorder";
import Recommendation from "./Recommendation";
import axios from "axios";

const dropDownOptions: any[] = [
  { value: "payment", label: "Payment" },
  { value: "cashout", label: "Cash Out" },
  { value: "cashin", label: "Cash In" },
  { value: "asset", label: "Asset" },
];

const data: any[] = [
  { name: "2023/06/12", sales: 850.2 },
  { name: "2023/06/13", sales: 780.6 },
  { name: "2023/06/14", sales: 810.0 },
  { name: "2023/06/15", sales: 800.0 },
  { name: "2023/06/16", sales: 1100.2 },
  { name: "2023/06/17", sales: 988.5 },
  { name: "2023/06/18", sales: 1200.2 },
];

const pizza: any[] = [
  { name: "Pepperoni Pizza", count: 220 },
  { name: "Cheese Pizza", count: 100 },
  { name: "Hawaiian Pizza", count: 92 },
];

function blobToWav(blob: Blob): Promise<Blob> {
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

function bufferToWav(buffer: AudioBuffer) {
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

function writeString(view: DataView, offset: number, string: string) {
  for (let i = 0; i < string.length; i++) {
    view.setUint8(offset + i, string.charCodeAt(i));
  }
}

const Overview = () => {
  return (
    <div className="w-full">
      <div className="flex flex-col gap-8 ">
        <div className="grid h-min w-full grid-cols-3 gap-8">
          {DASHBOARD_CARDS.map((item) => (
            <div className="col-span-1" key={item.title}>
              <DashboardCard
                icon={item.icon}
                title={item.title}
                subtitle={item.subtitle}
                valueChange={item.valueChange}
                changeType={item.changeType}
                changeMetric={item.changeMetric}
                isGood={item.isGood}
              />
            </div>
          ))}
        </div>
        <div className="grid h-min w-full grid-cols-8 gap-8">
          <div className="col-span-5 w-full rounded-xl bg-white p-12 shadow-sm">
            <AreaChartComponent
              data={data}
              title={"Total Sales Amount(RM) For The Past 7 Days"}
            />
          </div>
          <div className="col-span-3 w-full rounded-xl bg-white p-12 shadow-sm">
            <BarChartComponent data={pizza} title={"Top Pizzas Sold Today"} />
          </div>
        </div>
        <div>
          <Recommendation />
        </div>
        {/* <div>
          <DynamicDataTable
            rows={TRANSACTIONS}
            columns={TRANSACTION_COLUMNS}
            dropDownOptions={dropDownOptions}
          />
        </div> */}
      </div>
    </div>
  );
};

export default Overview;
