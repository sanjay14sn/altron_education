import { Award, CheckCircle, Globe, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function InternationalCertification() {
    return (
        <div className="bg-white">

            {/* HERO SECTION (NO BLUR) */}
            <div
                className="relative h-[480px] flex items-center justify-center bg-fixed bg-center bg-cover"
                style={{
                    backgroundImage:
                        "url('https://res.cloudinary.com/dq6gr5zjc/image/upload/v1773062591/ChatGPT_Image_Mar_9_2026_06_42_27_PM_iihcoo.png')"
                }}
            >
                {/* DARK OVERLAY (premium look) */}
                <div className="absolute inset-0 bg-black/60"></div>

                <div className="relative z-10 text-center max-w-3xl px-4">

                    <h1 className="text-5xl md:text-6xl font-bold text-white mb-4 tracking-tight">
                        International Certification
                    </h1>

                    <p className="text-lg text-white/90">
                        Globally recognized credentials that open doors to opportunities worldwide
                    </p>

                    <div className="text-sm text-white/70 mt-4">
                        Academy / International Certification
                    </div>

                </div>
            </div>


            <div className="max-w-7xl mx-auto px-4 py-24">

                {/* MAIN SECTION */}
                <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">

                    {/* LEFT */}
                    <div>

                        <div className="inline-flex items-center gap-2 bg-amber-100 border border-amber-300 rounded-full px-4 py-2 text-black text-sm mb-6">
                            <Globe className="w-4 h-4" /> International Accreditation
                        </div>

                        <h2 className="text-3xl md:text-4xl font-bold text-black mb-6 tracking-tight">
                            BSA-JAS-ANZ Certification
                        </h2>

                        <div className="space-y-5 text-gray-700 leading-relaxed text-[15px]">

                            <p>
                                Altron Academy is proudly certified by
                                <strong className="text-black"> BSA-JAS-ANZ</strong>, a prestigious international
                                accreditation body based in <strong className="text-black">New Zealand and Australia</strong>.
                            </p>

                            <p>
                                This certification ensures that our course curriculum, teaching methodology,
                                infrastructure, and faculty meet international standards. Students who complete
                                our programs receive certificates that are recognized globally.
                            </p>

                            <p>
                                The BSA-JAS-ANZ certification validates the authenticity of our training programs
                                and assures employers worldwide of the quality and credibility of our graduates.
                            </p>

                        </div>

                        <Link
                            to="/authenticity"
                            className="mt-8 inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg font-semibold shadow-sm hover:shadow-md transition"
                        >
                            <Shield className="w-4 h-4" /> Verify Certificate
                        </Link>

                    </div>


                    {/* RIGHT CARD */}
                    <div className="rounded-3xl p-12 border border-amber-200 bg-gradient-to-br from-amber-50 to-orange-100 shadow-md hover:shadow-xl transition duration-300 text-center">

                        <div className="w-20 h-20 mx-auto flex items-center justify-center rounded-full bg-white shadow-sm mb-6 text-4xl">
                            🏆
                        </div>

                        <div className="text-black font-bold text-2xl mb-1 tracking-tight">
                            BSA-JAS-ANZ
                        </div>

                        <div className="text-gray-800 font-semibold mb-1">
                            Certified Institute
                        </div>

                        <div className="text-gray-600 text-sm mb-8">
                            New Zealand & Australia
                        </div>

                        <div className="grid grid-cols-2 gap-3">
                            {['New Zealand', 'Australia', 'India', 'International'].map((country) => (
                                <div
                                    key={country}
                                    className="bg-white border border-amber-200 rounded-lg py-2 px-3 text-black text-xs font-medium shadow-sm"
                                >
                                    ✓ {country}
                                </div>
                            ))}
                        </div>

                    </div>

                </div>



                {/* BENEFITS */}
                <div className="mb-24">

                    <div className="text-center mb-14">
                        <h2 className="text-3xl md:text-4xl font-bold text-black tracking-tight">
                            Benefits of International Certification
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

                        {[
                            { title: 'Globally Recognized', desc: 'Certificates accepted by employers in 40+ countries worldwide.', icon: Globe },
                            { title: 'Higher Employability', desc: 'International certification gives you an edge over non-certified candidates.', icon: Award },
                            { title: 'Authentic Credentials', desc: 'Every certificate has a unique roll number verifiable online.', icon: Shield },
                            { title: 'Career Advancement', desc: 'Opens doors to senior technical and management positions.', icon: CheckCircle },
                            { title: 'Industry Recognition', desc: 'Recognized by top security companies in India and abroad.', icon: Award },
                            { title: 'MSME & NIESBUD', desc: 'Additional government recognition adds further credibility.', icon: Shield },
                        ].map((benefit, i) => (
                            <div
                                key={i}
                                className="group bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-xl transition duration-300"
                            >

                                <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-red-50 mb-4 group-hover:scale-105 transition">
                                    <benefit.icon className="w-6 h-6 text-red-600" />
                                </div>

                                <h3 className="text-black font-semibold mb-2">
                                    {benefit.title}
                                </h3>

                                <p className="text-gray-700 text-sm leading-relaxed">
                                    {benefit.desc}
                                </p>

                            </div>
                        ))}

                    </div>

                </div>



                {/* VERIFICATION */}
                <div className="rounded-2xl p-10 border border-red-200 text-center bg-gradient-to-b from-white to-gray-50 shadow-sm">

                    <div className="w-16 h-16 mx-auto flex items-center justify-center rounded-full bg-red-50 text-3xl mb-5">
                        🔍
                    </div>

                    <h3 className="text-black font-bold text-2xl mb-3 tracking-tight">
                        Verify Your Certificate
                    </h3>

                    <p className="text-gray-700 max-w-lg mx-auto mb-8 leading-relaxed text-[15px]">
                        Every Altron Academy certificate comes with a unique roll number.
                        Employers and institutions can verify the authenticity of any
                        certificate issued by us.
                    </p>

                    <Link
                        to="/authenticity"
                        className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg font-semibold shadow-sm hover:shadow-md transition"
                    >
                        <Shield className="w-4 h-4" />
                        Go to Certificate Verification
                    </Link>

                </div>

            </div>
        </div>
    );
}