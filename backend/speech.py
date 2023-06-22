import speech_recognition as sr

# obtain audio from the microphone
r = sr.Recognizer()

def recognize_speech(file):
  with sr.AudioFile(file) as source:
    audio = r.record(source)

  # recognize speech using whisper
  try:
      return r.recognize_whisper(audio)
  except sr.UnknownValueError:
      return "Could not understand what you said."
  except sr.RequestError as e:
      return "Could not request results from Whisper"