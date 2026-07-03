import { motion } from "framer-motion";

export function EndingSection() {
  return (
    <div className="ending-shell">
      <motion.div
        className="ending-card"
        initial={{ opacity: 0, y: 26 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7 }}
      >
        <p>Dedek, sudah selesai sampai sini berarti kamu sudah memberi waktu untuk diri sendiri. Itu besar.</p>
        <p>Abang sayang kamu. Teruskan dengan tenang, dan kalau perlu kembali lagi ke surat ini kapan saja.</p>
      </motion.div>
    </div>
  );
}
