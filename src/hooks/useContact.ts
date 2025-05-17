"use client"

import { useState, useEffect, type ChangeEvent, type FormEvent } from "react"
import { useLanguage } from "./useLanguage"
import { FormErrors } from "@/models/interfaces"

interface FormData {
    name: string
    email: string
    subject: string
    message: string
  }
  
export const useContact = () => {
  const { t } = useLanguage()
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [formErrors, setFormErrors] = useState<FormErrors>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isHeaderVisible, setIsHeaderVisible] = useState(false)
  const [isContentVisible, setIsContentVisible] = useState(false)

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))

    if (formErrors[name as keyof FormErrors]) {
      setFormErrors((prev) => ({ ...prev, [name]: undefined }))
    }
  }

  const validateForm = (): boolean => {
    const errors: FormErrors = {}

    if (!formData.name.trim()) {
      errors.name = t("contact.form.errors.name")
    }

    if (!formData.email.trim()) {
      errors.email = t("contact.form.errors.email")
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errors.email = t("contact.form.errors.emailInvalid")
    }

    if (!formData.subject.trim()) {
      errors.subject = t("contact.form.errors.subject")
    }

    if (!formData.message.trim()) {
      errors.message = t("contact.form.errors.message")
    }

    setFormErrors(errors)
    return Object.keys(errors).length === 0
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()

    if (!validateForm()) {
      return
    }

    setIsSubmitting(true)

    // Simulate form submission
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500))
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      })
      alert(t("contact.form.success"))
    } catch {
    alert(t("contact.form.error"))
    } finally {
      setIsSubmitting(false)
    }
  }

  useEffect(() => {
    const handleScroll = () => {
      const contactSection = document.getElementById("contact")
      if (contactSection) {
        const rect = contactSection.getBoundingClientRect()
        const isVisible = rect.top < window.innerHeight * 0.75

        if (isVisible) {
          setIsHeaderVisible(true)
          setTimeout(() => {
            setIsContentVisible(true)
          }, 300)
        }
      }
    }

    handleScroll()
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return {
    t,
    formData,
    formErrors,
    isSubmitting,
    isHeaderVisible,
    isContentVisible,
    handleChange,
    handleSubmit,
  }
}
