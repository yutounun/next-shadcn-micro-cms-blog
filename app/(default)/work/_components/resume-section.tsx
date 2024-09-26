import Image from "next/image";
import { motion } from "framer-motion";
import { IResume } from "@/microcms/type";

export default function ResumeSection({
  resumeData,
}: {
  resumeData: IResume[];
}) {
  return (
    <div className="max-w-5xl px-4 mx-auto sm:px-6 mb-8">
      <div>
        <motion.h1
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: [20, -5, 0],
          }}
          transition={{
            duration: 0.5,
            ease: [0.4, 0.0, 0.2, 1],
          }}
          className="text-2xl px-4 md:text-4xl lg:text-5xl font-bold text-neutral-700 dark:text-white max-w-4xl leading-relaxed lg:leading-snug text-center mx-auto "
        >
          Resume
        </motion.h1>
        <ul className="space-y-8">
          {resumeData.map((item) => (
            <li key={item.title} className="relative group">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <Image
                    width={56}
                    height={56}
                    src={item.imgUrl.url}
                    alt={`${item.title} Logo`}
                    className="rounded-full"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-lg font-medium leading-6">
                    {item.title}
                  </h3>
                  <p className="text-sm ">
                    {item.startDate} - {item.endDate}
                  </p>
                  <div className="mt-2 text-sm ">
                    <div
                      className="prose mx-auto content"
                      dangerouslySetInnerHTML={{ __html: item.description }}
                    />
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
