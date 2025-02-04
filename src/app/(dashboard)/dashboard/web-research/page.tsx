"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Slider } from "@/components/ui/slider"

const languages = [
    { value: "en", label: "English" },
    { value: "es", label: "Español" },
    { value: "fr", label: "Français" },
    { value: "de", label: "Deutsch" },
    { value: "it", label: "Italiano" },
    { value: "tr", label: "Türkçe" },
]

const researchTypes = [
    { value: "general", label: "General Research" },
    { value: "academic", label: "Academic Research" },
    { value: "news", label: "News Research" },
    { value: "market", label: "Market Research" },
]

export default function WebResearch() {
    const [topic, setTopic] = useState("")
    const [language, setLanguage] = useState("en")
    const [researchType, setResearchType] = useState("general")
    const [depth, setDepth] = useState(3)
    const [results, setResults] = useState("")

    const handleResearch = () => {
        // Implement web research logic here
        console.log("Researching:", { topic, language, researchType, depth })
        // For demonstration, we'll set a mock research result
        setResults(
            "This is a sample research result based on your query. It would typically include a summary of findings from various web sources, key points, and relevant links.",
        )
    }

    return (
        <div className="container mx-auto py-6 px-4">
            <h1 className="text-2xl font-semibold mb-6 text-gray-900">AI Web Research</h1>
            <Card className="w-full max-w-2xl mx-auto">
                <CardHeader>
                    <CardTitle>Research Your Topic</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                    <div className="space-y-2">
                        <Label htmlFor="topic">Research Topic</Label>
                        <Input
                            id="topic"
                            placeholder="Enter your research topic"
                            value={topic}
                            onChange={(e) => setTopic(e.target.value)}
                        />
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="language">Research Language</Label>
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
                        <Label htmlFor="researchType">Research Type</Label>
                        <Select value={researchType} onValueChange={setResearchType}>
                            <SelectTrigger id="researchType">
                                <SelectValue placeholder="Select Research Type" />
                            </SelectTrigger>
                            <SelectContent>
                                {researchTypes.map((type) => (
                                    <SelectItem key={type.value} value={type.value}>
                                        {type.label}
                                    </SelectItem>
                                ))}
                            </SelectContent>
                        </Select>
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="depth">Research Depth: {depth}</Label>
                        <Slider id="depth" min={1} max={5} step={1} value={[depth]} onValueChange={(value) => setDepth(value[0])} />
                    </div>
                    {results && (
                        <div className="space-y-2">
                            <Label>Research Results</Label>
                            <Textarea value={results} readOnly className="h-40" />
                        </div>
                    )}
                </CardContent>
                <CardFooter>
                    <Button onClick={handleResearch} className="w-full">
                        Start Research
                    </Button>
                </CardFooter>
            </Card>
        </div>
    )
}

