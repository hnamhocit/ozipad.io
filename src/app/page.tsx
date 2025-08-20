"use client"

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {useEffect, useRef, useState} from "react";

const variants = [
	"Sentence case",
	"lower case",
	"UPPER CASE",
	"Capitalized Case",
	"aLtErNaTiNg cAsE",
	"InVeRsE CaSe"
]

const Home = () => {
	const [lines, setLines] = useState<{i: number, value: string}[]>([])
	const [height, setHeight] = useState(0);

	const containerRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		setLines(Array.from({length: 30}, (_, i) => ({i, value: ''})))
	}, []);

	useEffect(() => {
		setHeight(containerRef.current?.scrollHeight ?? 0);
	}, [lines.length]);

	return (
		<div className='relative h-screen overflow-hidden'>
			<Header />

			<div className="fixed bottom-12 pb-3 z-20 left-0 w-full">
				<div className="container mx-auto px-4 flex gap-3 items-center justify-between">
					{variants.map((variant) => (
						<div key={variant} className="flex-1 py-2 px-3 text-sm font-medium text-center bg-semidark rounded-2xl transition">
							{variant}
						</div>
					))}
				</div>
			</div>

			<div ref={containerRef} className="relative h-[calc(100%-176px)] overflow-y-scroll bg-[#151515]">
				<div className="absolute inset-0 container mx-auto"
				     style={{
					     height,
				     }}
				>
					<div
						className="absolute left-0 top-0 bottom-0 w-[2px] bg-[#FFD76B80]/50 pointer-events-none"
					>

					</div>
				</div>


				<div className='flex flex-col py-1 w-full min-h-12 border-b border-paper-dark'>
					<div className="flex-1 flex flex-col container mx-auto">
						<input type="text" className='z-10 block flex-1 px-4 w-full h-full bg-transparent outline-none' placeholder='Enter here'/>
					</div>
				</div>

				{lines.map((line, i) => (
					<div key={line.i} className='flex flex-col w-full min-h-10 border-b border-paper-dark'>
						<div className="flex-1 flex flex-col container mx-auto">
							<input type="text" className='z-10 block flex-1 px-4 w-full h-full bg-transparent outline-none'/>
						</div>
					</div>
				))}
			</div>

			<Footer />
		</div>
	)
}
export default Home
