//This component is used to input a 6-digit verification code, supporting auto-focus and delete functionality.
'use client'
import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'

type Props = {
  onSubmit?: (code: string) => Promise<boolean>  // return true if success, false if error
  onChange?: (value: string) => void;
}

export default function OTPInput({ onSubmit, onChange }: Props) {
  const inputRefs = useRef<Array<HTMLInputElement | null>>([])
  const [otp, setOtp] = useState<string[]>(Array(6).fill(''))
  const [error, setError] = useState<string>("")
  const [shake, setShake] = useState(false)

  const handleChange = (index: number, value: string) => {
    if (!/^\d?$/.test(value)) return

    const newOtp = [...otp]
    newOtp[index] = value
    setOtp(newOtp)

    if (value && index < 5) {
      inputRefs.current[index + 1]?.focus()
    }

    onChange?.(newOtp.join(""));
  }

  const handleKeyDown = (index: number, e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Backspace' && !otp[index] && index > 0) {
      inputRefs.current[index - 1]?.focus()
    }
  }

  // submit the OTP when all 6 digits are filled
  // useEffect(() => {
  //   const code = otp.join('')
  //   if (code.length === 6 && !code.includes('')) {
  //     onSubmit(code).then((success) => {
  //       if (!success) {
  //         setShake(true)
  //         setError("Invalid verification code.")
  //         setOtp(Array(6).fill(""))
  //         inputRefs.current[0]?.focus()
  //       }
  //     })
  //   }
  // }, [otp])

  // shake animation
  useEffect(() => {
    if (shake) {
      const timeout = setTimeout(() => setShake(false), 500)
      return () => clearTimeout(timeout)
    }
  }, [shake])

  return (
    <div className="mt-4 flex flex-col items-center">
      <motion.div
        className="flex gap-2"
        animate={shake ? { x: [0, -10, 10, -6, 6, -2, 2, 0] } : {}}
        transition={{ duration: 0.4 }}
      >
        {otp.map((digit, index) => (
          <input
            key={index}
            ref={(el) => {
                inputRefs.current[index] = el;
              }}
            type="text"
            inputMode="numeric"
            maxLength={1}
            value={digit}
            onChange={(e) => handleChange(index, e.target.value)}
            onKeyDown={(e) => handleKeyDown(index, e)}
            className="w-10 h-12 border border-gray-500 rounded text-center text-xl focus:outline-none focus:ring-2 focus:ring-purple-400"
          />
        ))}
      </motion.div>
      {error && (
        <p className="text-red-500 text-sm mt-2">{error}</p>
      )}
    </div>
  )
}
