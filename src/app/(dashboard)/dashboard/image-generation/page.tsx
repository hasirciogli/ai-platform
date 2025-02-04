"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Slider } from "@/components/ui/slider"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"

const languages = [
    { value: "en", label: "English" },
    { value: "es", label: "Español" },
    { value: "fr", label: "Français" },
    { value: "de", label: "Deutsch" },
    { value: "it", label: "Italiano" },
    { value: "tr", label: "Türkçe" },
]

const styles = [
    { value: "realistic", label: "Realistic" },
    { value: "cartoon", label: "Cartoon" },
    { value: "abstract", label: "Abstract" },
    { value: "sketch", label: "Sketch" },
]

export default function ImageGeneration() {
    const [prompt, setPrompt] = useState("")
    const [language, setLanguage] = useState("en")
    const [style, setStyle] = useState("realistic")
    const [imageSize, setImageSize] = useState(512)
    const [enhanceDetails, setEnhanceDetails] = useState(false)

    const handleGenerate = () => {
        // Implement image generation logic here
        console.log("Generating image with:", { prompt, language, style, imageSize, enhanceDetails })
    }

    return (
        <div className="container mx-auto">
            <h1 className="text-3xl font-semibold mb-6">AI Image Generation</h1>
            <div className="flex gap-6">
                <div className="w-1/2">
                    <Card className="h-full">
                        <CardHeader>
                            <CardTitle>Generated Image</CardTitle>
                        </CardHeader>
                        <CardContent className="flex items-center justify-center h-96 bg-secondary">
                            <p className="text-muted-foreground">Your generated image will appear here</p>
                        </CardContent>
                    </Card>
                </div>
                <div className="w-1/2">
                    <Card>
                        <CardHeader>
                            <CardTitle>Image Settings</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div className="space-y-2">
                                <Label htmlFor="prompt">Image Description</Label>
                                <Input
                                    id="prompt"
                                    placeholder="Describe the image you want to generate"
                                    value={prompt}
                                    onChange={(e) => setPrompt(e.target.value)}
                                />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="language">Language</Label>
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
                                <Label htmlFor="style">Image Style</Label>
                                <Select value={style} onValueChange={setStyle}>
                                    <SelectTrigger id="style">
                                        <SelectValue placeholder="Select Style" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        {styles.map((s) => (
                                            <SelectItem key={s.value} value={s.value}>
                                                {s.label}
                                            </SelectItem>
                                        ))}
                                    </SelectContent>
                                </Select>
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="size">
                                    Image Size: {imageSize}x{imageSize}
                                </Label>
                                <Slider
                                    id="size"
                                    min={256}
                                    max={1024}
                                    step={256}
                                    value={[imageSize]}
                                    onValueChange={(value) => setImageSize(value[0])}
                                />
                            </div>
                            <div className="flex items-center space-x-2">
                                <Switch id="enhance" checked={enhanceDetails} onCheckedChange={setEnhanceDetails} />
                                <Label htmlFor="enhance">Enhance Details</Label>
                            </div>
                        </CardContent>
                        <CardFooter>
                            <Button onClick={handleGenerate} className="w-full">
                                Generate Image
                            </Button>
                        </CardFooter>
                    </Card>
                </div>
            </div>
        </div>
    )
}

