import React from 'react';
import { motion } from 'framer-motion';

const Todos = () => {
  return (
    <div>
      <motion.div
        drag
        dragConstraints={{
          top: -50,
          left: -30,
          right: 1386,
          bottom: 50,
        }}
        whileHover={{ opacity: 0.9, scale: 1.1 }}
        style={{
          width: 250,
          height: 250,
          backgroundColor: '#fff',
          borderRadius: 10,
          marginTop: 30,
          marginLeft: 30,
        }}
        className="block-1"
      ></motion.div>
      <motion.div
        drag
        dragConstraints={{
          top: -50,
          left: -50,
          right: 50,
          bottom: 50,
        }}
        whileHover={{ opacity: 0.9, scale: 1.1 }}
        className="block-2"
        style={{
          width: 250,
          height: 250,
          backgroundColor: '#fff',
          borderRadius: 10,
          marginTop: 30,
          marginLeft: 30,
        }}
      ></motion.div>
    </div>
  );
};

export default Todos;
