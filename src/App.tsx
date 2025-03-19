import React from "react";
import {
    Code2,
    Timer,
    Trophy,
    AlertTriangle,
    Users,
    CheckCircle2,
    Phone,
    MapPin,
    IndianRupee,
    Layers,
} from "lucide-react";

import logo from "../image/logo.jpg";
import logo2 from "../image/logo2.jpg";

function App() {
    return (
        <div className="min-h-screen mb-px-40 px-3 bg-gradient-to-br from-[#5e17eb] to-[#cb6ce6]">
            <nav className="flex gap-5">
                <img src={logo} alt="" className="rounded-full w-20 aspect-square" />
                <img src={logo2} alt="" className="rounded-full w-20 aspect-square" />
            </nav>
            {/* Hero Section */}
            <header className="container mx-auto px-4 py-16 text-white">
                <div className="flex flex-col items-center text-center">
                    <Code2 size={64} className="mb-6 animate-pulse" />
                    <h1 className="text-5xl font-bold mb-4">Code Battle</h1>
                    <p className="text-xl mb-8">SIOM MCA Department</p>
                    <button className="bg-white text-[#5e17eb] px-8 py-3 rounded-full font-semibold hover:bg-opacity-90 transition-all">
                       <a target="_blank" href="https://forms.gle/m3cwPrgPtqEN1Dz87"> Register Now </a>
                    </button>
                </div>
            </header>

            {/* Main Content */}
            <main className="container mx-auto px-4 py-12 space-y-12">
                {/* Event Details Section */}
                <section className="bg-white rounded-2xl p-8 shadow-xl">
                    <h2 className="text-3xl font-bold mb-6 text-[#5e17eb] flex items-center gap-2">
                        <Layers size={32} />
                        Event Structure
                    </h2>
                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="space-y-6">
                            <div>
                                <h3 className="text-xl font-semibold text-[#5e17eb] mb-3">
                                    Competition Rounds
                                </h3>
                                <ul className="space-y-3">
                                    <li className="flex items-center gap-2">
                                        <CheckCircle2 className="text-[#cb6ce6]" />
                                        <span>
                                            <strong>Round I:</strong> Aptitude
                                            Test
                                        </span>
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <CheckCircle2 className="text-[#cb6ce6]" />
                                        <span>
                                            <strong>Round II:</strong> DSA Round
                                        </span>
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold text-[#5e17eb] mb-3">
                                    Registration Details
                                </h3>
                                <ul className="space-y-3">
                                    <li className="flex items-center gap-2">
                                        <IndianRupee className="text-[#cb6ce6]" />
                                        <span>
                                            <strong>Fees:</strong> ₹100
                                        </span>
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <MapPin className="text-[#cb6ce6]" />
                                        <span>
                                            <strong>Venue:</strong> SIOM, Pune
                                        </span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div>
                            <h3 className="text-xl font-semibold text-[#5e17eb] mb-3">
                                Student Coordinators
                            </h3>
                            <ul className="space-y-3">
                                <li className="flex items-center gap-2">
                                    <Phone className="text-[#cb6ce6]" />
                                    <span>
                                        <strong>Prathamesh Dande:</strong>{" "}
                                        8530698705
                                    </span>
                                </li>
                                <li className="flex items-center gap-2">
                                    <Phone className="text-[#cb6ce6]" />
                                    <span>
                                        <strong>Sakshi Barapatre:</strong>{" "}
                                        7620910120
                                    </span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </section>

                {/* Rules Section */}
                <section className="bg-white rounded-2xl p-8 shadow-xl">
                    <h2 className="text-3xl font-bold mb-6 text-[#5e17eb] flex items-center gap-2">
                        <AlertTriangle size={32} />
                        Rules & Guidelines
                    </h2>
                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="space-y-4">
                            <h3 className="text-xl font-semibold text-[#5e17eb]">
                                Disqualification Criteria
                            </h3>
                            <ul className="list-disc list-inside space-y-2 text-gray-700">
                                <li>Syntax Error</li>
                                <li>Run-time Error</li>
                                <li>Time Limit Exceeded</li>
                                <li>Wrong Answer</li>
                                <li>Failed Test Case</li>
                                <li>Inaccurate Answer</li>
                                <li>Too Little/Too Much Output</li>
                                <li>Incorrect Output Format</li>
                            </ul>
                        </div>
                        <div className="space-y-4">
                            <h3 className="text-xl font-semibold text-[#5e17eb]">
                                Important Notes
                            </h3>
                            <ul className="space-y-4">
                                <li className="flex items-start gap-2">
                                    <Timer className="flex-shrink-0 text-[#cb6ce6]" />
                                    <span>
                                        Arrive 30 minutes before each round
                                    </span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <Users className="flex-shrink-0 text-[#cb6ce6]" />
                                    <span>
                                        Judging panel's decision is final
                                    </span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <CheckCircle2 className="flex-shrink-0 text-[#cb6ce6]" />
                                    <span>
                                        Top 20 from Round I advance to Round II
                                    </span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </section>

                {/* Prizes Section */}
                <section className="bg-white rounded-2xl p-8 shadow-xl">
                    <h2 className="text-3xl font-bold mb-6 text-[#5e17eb] flex items-center gap-2">
                        <Trophy size={32} />
                        Prizes & Recognition
                    </h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <div className="bg-gradient-to-br from-[#5e17eb] to-[#cb6ce6] p-6 rounded-xl text-white text-center">
                            <h3 className="text-2xl font-bold mb-2">
                                First Prize
                            </h3>
                            <p className="text-3xl font-bold mb-2">₹3,000</p>
                            <p className="text-lg">+ Certificate</p>
                        </div>
                        <div className="bg-gradient-to-br from-[#5e17eb] to-[#cb6ce6] p-6 rounded-xl text-white text-center">
                            <h3 className="text-2xl font-bold mb-2">
                                Second Prize
                            </h3>
                            <p className="text-3xl font-bold mb-2">₹2,000</p>
                            <p className="text-lg">+ Certificate</p>
                        </div>
                        <div className="bg-gradient-to-br from-[#5e17eb] to-[#cb6ce6] p-6 rounded-xl text-white text-center md:col-span-2 lg:col-span-1">
                            <h3 className="text-2xl font-bold mb-2">
                                Special Mentions
                            </h3>
                            <p>Recognition for outstanding performers</p>
                        </div>
                    </div>
                </section>
            </main>

            {/* Footer */}
            <footer className="container mx-auto px-4 py-8 text-white text-center">
                <p>© 2024 SIOM MCA Department. All rights reserved.</p>
                created by{" "}
                <a
                    href="https://github.com/Piyush-Bhagwat"
                    className="underline"
                >
                    Piyush Bhagwat
                </a>
            </footer>
        </div>
    );
}

export default App;
