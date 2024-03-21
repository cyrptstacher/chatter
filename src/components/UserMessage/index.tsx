import { UserTranscriptMessage } from '@humeai/voice-react';
import { motion } from 'framer-motion';
import { FC, Fragment, useMemo } from 'react';

export type UserMessageProps = {
  message: UserTranscriptMessage;
};
export const UserMessage: FC<UserMessageProps> = ({ message }) => {
  const words = useMemo(() => {
    return message.message.content.split(' ');
  }, [message.message.content]);

  return (
    <motion.div
      className="z-50 mr-auto w-fit max-w-lg rounded-t-xl rounded-br-xl bg-green-300 px-4 py-2 text-lg"
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
      }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex flex-wrap">
        {words.map((word, index) => {
          return (
            <Fragment key={index}>
              <motion.span key={`${index}__${word}`}>{word}</motion.span>
              <span>&nbsp;</span>
            </Fragment>
          );
        })}
      </div>
    </motion.div>
  );
};
