"use client";

import { Button } from "@/components/ui/button";
import { useState } from "react";

const Recommender = () => {
  const [recording, setRecording] = useState(false);
  let mediaRecorder: MediaRecorder | null = null;
  let chunks: BlobPart[] = [];

  const startRecording = async () => {
    const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
    mediaRecorder = new MediaRecorder(stream);
    mediaRecorder.start();

    mediaRecorder.ondataavailable = function (e) {
      chunks.push(e.data);
    };

    setRecording(true);
  };

  const stopRecording = () => {
    if (mediaRecorder) {
      mediaRecorder.stop();
      const blob = new Blob(chunks, { type: "audio/ogg; codecs=opus" });
      chunks = [];
      const audioURL = window.URL.createObjectURL(blob);
      // You can use audioURL for further processing
    }

    setRecording(false);
  };

  return (
    <section className="h-screen w-full p-8">
      <h1>Recommender</h1>
      {recording ? (
        <Button onClick={stopRecording}>Stop Recording</Button>
      ) : (
        <Button onClick={startRecording}>Start Recording</Button>
      )}
    </section>
  );
};

export default Recommender;
