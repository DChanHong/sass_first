"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Header from "@/components/Header";

export default function ServicesPage() {
  const services = [
    {
      title: '사주팔자',
      description: '동양의 전통 운세를 확인해보세요',
      href: '/bazi',
      icon: '🎋',
      color: 'from-emerald-500 to-teal-500',
    },
    {
      title: '서양 점성술',
      description: '별자리와 행성의 영향을 알아보세요',
      href: '/western-astrology',
      icon: '⭐',
      color: 'from-purple-500 to-indigo-500',
    },
    {
      title: '인도 점성술',
      description: '베다 점성술로 운세를 확인하세요',
      href: '/vedic-astrology',
      icon: '🕉️',
      color: 'from-orange-500 to-red-500',
    },
    {
      title: '타로 예측',
      description: '타로 카드로 미래를 탐색하세요',
      href: '/tarot',
      icon: '🎴',
      color: 'from-pink-500 to-rose-500',
    },
  ];

  return (
    <>
      <Header />
      <main className="min-h-screen pt-16">
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-to-b from-emerald-50 via-teal-50 to-white overflow-hidden">
          <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
          <div className="container mx-auto px-4 z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h1 className="text-4xl md:text-5xl font-bold text-emerald-900 mb-6">
                운세 서비스
              </h1>
              <p className="text-xl text-emerald-700 max-w-2xl mx-auto">
                다양한 운세 서비스로 당신의 운세를 확인해보세요.<br />
                동양과 서양의 지혜가 만나 새로운 인사이트를 제공합니다.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {services.map((service, index) => (
                <motion.div
                  key={service.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Link
                    href={service.href}
                    className="block p-8 bg-white rounded-2xl border border-gray-100 shadow-lg hover:shadow-xl transition-all duration-300 hover:cursor-pointer group"
                  >
                    <div className="flex flex-col h-full">
                      <div className="text-5xl mb-6">{service.icon}</div>
                      <div className="flex-1">
                        <h3 className="text-2xl font-semibold text-gray-900 group-hover:text-emerald-600 transition-colors duration-200 mb-3">
                          {service.title}
                        </h3>
                        <p className="text-gray-600 text-lg mb-6">{service.description}</p>
                        <div className="flex items-center text-emerald-500 font-medium">
                          서비스 이용하기
                          <svg
                            className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform duration-200"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M17 8l4 4m0 0l-4 4m4-4H3"
                            />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  );
} 