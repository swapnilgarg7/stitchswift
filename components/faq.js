import React from "react";
import Container from "./container";
import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/24/solid";

const Faq = () => {
  return (
    <Container className="!p-0">
      <div className="w-full max-w-2xl p-2 mx-auto rounded-2xl">
        {faqdata.map((item, index) => (
          <div key={item.question} className="mb-5">
            <Disclosure>
              {({ open }) => (
                <>
                  <Disclosure.Button className="flex items-center justify-between w-full px-4 py-4 text-lg text-left text-gray-800 rounded-lg bg-gray-50 hover:bg-gray-100 focus:outline-none focus-visible:ring focus-visible:ring-indigo-100 focus-visible:ring-opacity-75 dark:bg-trueGray-800 dark:text-gray-200">
                    <span>{item.question}</span>
                    <ChevronUpIcon
                      className={`${open ? "transform rotate-180" : ""
                        } w-5 h-5 text-indigo-500`}
                    />
                  </Disclosure.Button>
                  <Disclosure.Panel className="px-4 pt-4 pb-2 text-gray-500 dark:text-gray-300">
                    {item.answer}
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
          </div>
        ))}
      </div>
    </Container>
  );
}

const faqdata = [
  {
    question: "What services do you offer?",
    answer: "We offer a range of tailoring services including alterations, custom clothing, and garment repairs."
  },
  {
    question: "How can I schedule an appointment?",
    answer: "You can schedule an appointment by calling us directly or using our online booking system on our website."
  },
  {
    question: "How long does it take to get alterations done?",
    answer: "The time required for alterations depends on the complexity of the job and our current workload. We'll provide you with an estimated completion time when you drop off your garment."
  },
  {
    question: "Do you do alterations on all types of clothing?",
    answer: "Yes, we offer alterations on a wide range of clothing items including suits, dresses, pants, skirts, and more."
  },
  {
    question: "Can you create custom clothing from scratch?",
    answer: "Absolutely! We specialize in creating custom garments tailored to your specific measurements and preferences."
  },
  {
    question: "What is your pricing structure?",
    answer: "Our pricing varies depending on the type of service and the extent of the work needed. Feel free to contact us for a quote."
  },
  {
    question: "Do you offer fittings?",
    answer: "Yes, we provide fittings to ensure your garments fit perfectly."
  },
  {
    question: "Do you work with wedding parties or other special events?",
    answer: "Yes, we can accommodate wedding parties and other special events. Contact us in advance to discuss your needs."
  },
  {
    question: "Do you offer delivery or shipping services?",
    answer: "Yes, we offer delivery and shipping services for your convenience. Additional charges may apply."
  }
];


export default Faq;