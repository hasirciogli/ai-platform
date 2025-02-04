"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Slider } from "@/components/ui/slider"

const languages = [
    { value: "en", label: "English" },
    { value: "es", label: "Español" },
    { value: "fr", label: "Français" },
    { value: "de", label: "Deutsch" },
    { value: "it", label: "Italiano" },
    { value: "tr", label: "Türkçe" },
]

const personalities = [
    { value: "friendly", label: "Friendly" },
    { value: "professional", label: "Professional" },
    { value: "humorous", label: "Humorous" },
    { value: "sarcastic", label: "Sarcastic" },
]

const models = [
    { value: "gpt-3.5-turbo", label: "GPT-3.5 Turbo" },
    { value: "gpt-4", label: "GPT-4" },
]

export default function Chatbot() {
    const [message, setMessage] = useState("")
    const [language, setLanguage] = useState("en")
    const [personality, setPersonality] = useState("friendly")
    const [model, setModel] = useState("gpt-3.5-turbo")
    const [temperature, setTemperature] = useState(0.7)
    const [useEmojis, setUseEmojis] = useState(false)
    const [conversation, setConversation] = useState<{ role: "user" | "bot"; content: string }[]>([])

    const handleSend = () => {
        if (message.trim()) {
            setConversation((prev) => [...prev, { role: "user", content: message }])

            // Implement chatbot logic here
            console.log("Sending message:", { message, language, personality, model, temperature, useEmojis })

            // For demonstration, we'll add a mock bot response
            setTimeout(() => {
                const botResponse = `This is a sample response from the ${personality} chatbot${useEmojis ? " 😊" : "."}`
                setConversation((prev) => [...prev, { role: "bot", content: botResponse }])
            }, 1000)

            setMessage("")
        }
    }

    return (
        <div className="container mx-auto">
            <h1 className="text-3xl font-semibold mb-6">AI Chatbot</h1>
            <div className="flex gap-6">
                <div className="w-2/3">
                    <Card className="h-[calc(100vh-12rem)]">
                        <CardHeader>
                            <CardTitle>Chat</CardTitle>
                        </CardHeader>
                        <CardContent className="h-[calc(100%-8rem)] overflow-y-auto space-y-4">
                            {conversation.map((msg, index) => (
                                <div key={index} className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
                                    <div
                                        className={`max-w-[70%] p-3 rounded-2xl ${msg.role === "user" ? "bg-primary text-primary-foreground" : "bg-secondary"}`}
                                    >
                                        {msg.content}
                                    </div>
                                </div>
                            ))}
                        </CardContent>
                        <CardFooter>
                            <div className="flex w-full space-x-2">
                                <Input
                                    placeholder="Type your message..."
                                    value={message}
                                    onChange={(e) => setMessage(e.target.value)}
                                    onKeyPress={(e) => e.key === "Enter" && handleSend()}
                                />
                                <Button onClick={handleSend}>Send</Button>
                            </div>
                        </CardFooter>
                    </Card>
                </div>
                <div className="w-1/3">
                    <Card>
                        <CardHeader>
                            <CardTitle>Chat Settings</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div className="space-y-2">
                                <Label htmlFor="language">Chat Language</Label>
                                <Select value={language} onValueChange={setLanguage}>
                                    <SelectTrigger id="language">
                                        <SelectValue placeholder="Select Language" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        {languages.map((lang) => (
                                            <SelectItem key={lang.value} value={lang.value}>
                                                {lang.label}
                                            </SelectItem>
                                        ))}
                                    </SelectContent>
                                </Select>
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="personality">Bot Personality</Label>
                                <Select value={personality} onValueChange={setPersonality}>
                                    <SelectTrigger id="personality">
                                        <SelectValue placeholder="Select Personality" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        {personalities.map((p) => (
                                            <SelectItem key={p.value} value={p.value}>
                                                {p.label}
                                            </SelectItem>
                                        ))}
                                    </SelectContent>
                                </Select>
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="model">AI Model</Label>
                                <Select value={model} onValueChange={setModel}>
                                    <SelectTrigger id="model">
                                        <SelectValue placeholder="Select Model" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        {models.map((m) => (
                                            <SelectItem key={m.value} value={m.value}>
                                                {m.label}
                                            </SelectItem>
                                        ))}
                                    </SelectContent>
                                </Select>
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="temperature">Temperature: {temperature}</Label>
                                <Slider
                                    id="temperature"
                                    min={0}
                                    max={1}
                                    step={0.1}
                                    value={[temperature]}
                                    onValueChange={(value) => setTemperature(value[0])}
                                />
                            </div>
                            <div className="flex items-center space-x-2">
                                <Switch id="emojis" checked={useEmojis} onCheckedChange={setUseEmojis} />
                                <Label htmlFor="emojis">Use Emojis</Label>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    )
}

