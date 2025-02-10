"use client";
import * as Ably from "ably";
import ChatBox from "./chat-box.jsx";

export default function Chat() {
  const client = new Ably.Realtime({
    key: "NdkxxQ.vlE9Sg:v4xBJPWjxAkQ6uIhlq7SRAP2YMQY-qMXVphofo-aRoI",
  });
  return <ChatBox />;
}