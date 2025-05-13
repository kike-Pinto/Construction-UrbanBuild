import React from 'react'
import Pretitle from './Pretitle'
import { motion } from 'framer-motion'
import { fadeIn } from '../public/assets/img/variants'
import FaqItem from './FaqItem'

const faqItemsData = [
  {
    title: 'How long does a construction project usually take?',
    description:
      'Timelines vary based on project size and complexity. A small renovation may take a few weeks, while larger projects can take several months.',
  },
  {
    title: 'How long does a construction project usually take?',
    description:
      'Timelines vary based on project size and complexity. A small renovation may take a few weeks, while larger projects can take several months.',
  },

  {
    title: 'Do I need permits for my project?',
    description:
      'Timelines vary based on project size and complexity. A small renovation may take a few weeks, while larger projects can take several months.',
  },

  {
    title: 'Can I make changes after construction starts?',
    description:
      'Timelines vary based on project size and complexity. A small renovation may take a few weeks, while larger projects can take several months.',
  },
  {
    title: 'How much will my construction project cost?',
    description:
      'Timelines vary based on project size and complexity. A small renovation may take a few weeks, while larger projects can take several months.',
  },
  {
    title: 'How do you ensure quality and safety on-site?',
    description:
      'Timelines vary based on project size and complexity. A small renovation may take a few weeks, while larger projects can take several months.',
  },
]

const faqItemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (index) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: index * 0.1,
      duration: 0.3, //staggered animation
    },
  }),
}

const Faq = () => {
  return (
    <section className='pt-16 xl:pt-32'>
      <div className='container mx-auto'>
        {/* text */}
        <motion.div
          variants={fadeIn('up', 0.2)}
          initial='hidden'
          whileInView='show'
          viewport={{ once: false, amoount: 0.2 }}
          className='text-center max-w-[540px] mx-auto xl:mb-20'
        >
          <Pretitle text='Faq' center />
          <h2 className='h2 mb-6'>Got Questions? We've Got You Covered</h2>
          <p className='mb-11 maz-w-[480px] mx-auto'>
            From project planning to final touches, we've asnwered that most
            common qustions to help you make informed decisions.
          </p>
        </motion.div>

        {/* Faq items */}
        <ul className='w-full flex flex-col'>
          {faqItemsData.map((item, index) => {
            return (
              <motion.li
                key={index}
                variants={faqItemVariants}
                initial='hidden'
                whileInView='visible'
                viewport={{ once: false, amoount: 0.8 }}
                custom={index} // pass index to control stagger effect
              >
                <FaqItem title={item.title} description={item.description} />
              </motion.li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}

export default Faq
