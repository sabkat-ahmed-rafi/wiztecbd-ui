'use client';

import { useRef } from 'react';
import { motion, Variants } from 'framer-motion';
import { useInView } from 'framer-motion';
import {
  FaWallet,
  FaChartLine,
  FaEnvelope,
  FaFileAlt,
  FaAddressBook,
  FaEnvelopeOpenText,
  FaHandshake,
  FaChartBar,
} from 'react-icons/fa';
import { CardData } from '@/types/types';

const cards: CardData[] = [
  {
    title: 'Payments',
    description: 'Responsibly sourced, certified and eco-friendly fabrics for a better tomorrow.',
    icon: <FaWallet className="text-4xl text-red-500" />,
  },
  {
    title: 'Analytics',
    description: 'Understand your growth with smart, built-in analytics.',
    icon: <FaChartLine className="text-4xl text-blue-500" />,
  },
  {
    title: 'Newsletters',
    description: 'Build your audience with engaging, branded newsletter.',
    icon: <FaEnvelope className="text-4xl text-orange-500" />,
  },
  {
    title: 'Pages',
    description: 'Showcase your expertise with a personal profile that sells for you.',
    icon: <FaFileAlt className="text-4xl text-yellow-500" />,
  },
  {
    title: 'Contact',
    description: 'Organize your contacts and turn them into your most valuable asset.',
    icon: <FaAddressBook className="text-4xl text-indigo-500" />,
  },
  {
    title: 'Emails',
    description: 'Showcase your expertise with a personal profile that sells for you.',
    icon: <FaEnvelopeOpenText className="text-4xl text-pink-500" />,
  },
  {
    title: 'Co-sell network',
    description: 'Collaborate with others to sell more without ad spend or extra effort.',
    icon: <FaHandshake className="text-4xl text-purple-500" />,
  },
  {
    title: 'Enterprise plan',
    description: 'Full white-label platform hosted on a dedicated, auto-scaling server. Includes branding freedom, private content protection, and 24/7 service availability.',
    icon: <FaChartBar className="text-4xl text-orange-400" />,
    large: true,
    gradient: true,
  },
];

export function EssentialToolsSection() {

  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '0px 0px -100px 0px' });

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.5,
      },
    },
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 15,
      } as any,
    },
  };

  return (
      <section ref={sectionRef} className="py-16 md:py-24 bg-[#FDF6E8]">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <div className="inline-block mb-4 px-3 py-2 bg-linear-to-r from-[#BCB3A0] to-[#E0D8C9] rounded-full silka text-xs">
            <span className="text-xs font-semibold uppercase">
              Essential Tools
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 clash-bold">
            Essential Tools
            <br />
            Zero Distractions
          </h1>
          <p className="text-gray-600 text-sm md:text-base max-w-2xl mx-auto silka">
            Create diverse products on the platform and leverage our powerful tools to drive sales within and beyond GrowHubs.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-4 lg:mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          {cards.map((card, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className={`
                ${card.large ? 'md:col-span-2 lg:col-span-2' : ''}
                ${card.gradient
                  ? 'bg-linear-to-r from-[#4D5D69] to-[#A16A6B] text-white'
                  : 'bg-white'
                }
                rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all duration-300 group
              `}
              whileHover={{ y: -5 }}
            >
              <div className="flex items-start justify-between mb-4">
                <h3 className={`text-xl md:text-2xl font-bold clash-bold ${card.gradient ? 'bg-linear-to-r from-[#FFD900] via-[#FBFD89] to-[#FFD900] bg-clip-text text-transparent' : 'text-gray-900'}`}>
                  {card.title}
                </h3>
                <motion.div
                  className="shrink-0 ml-4"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: 'spring', stiffness: 200 }}
                >
                  {card.icon}
                </motion.div>
              </div>
              <p className={`text-sm md:text-base mb-6 ${card.gradient ? 'text-gray-200' : 'text-gray-600'} silka`}>
                {card.description}
              </p>
              <motion.a
                href="#"
                className={`inline-flex items-center text-sm font-semibold group silka ${
                  card.gradient ? 'bg-linear-to-r from-[#FFD900] via-[#FBFD89] to-[#FFD900] bg-clip-text text-transparent' : 'text-orange-500'
                }`}
                whileHover={{ x: 5 }}
              >
                Learn more
                <motion.span
                  className="ml-2"
                  initial={{ x: 0 }}
                  whileHover={{ x: 3 }}
                  transition={{ type: 'spring', stiffness: 200 }}
                >
                  →
                </motion.span>
              </motion.a>
            </motion.div>
          ))}
        </motion.div>
      </section>
  );
}

