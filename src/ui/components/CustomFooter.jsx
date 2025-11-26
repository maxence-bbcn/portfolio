import emailjs from "@emailjs/browser";
import { yupResolver } from "@hookform/resolvers/yup";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { contactSchema } from "../utils/validationSchema.js";
import AnimatedTitle from "./AnimatedTitle";
import { Button } from "./Button";
import CustomInput from "./CustomInput";

export default function CustomFooter() {
  const form = useRef();
  emailjs.init("heTV3xSPg4dDMJVvj");
  const [mailSuccess, setMailSuccess] = useState({
    success: null,
    displayMessage: false,
  });

  const sendEmail = (values) => {
    emailjs.send("service_0b5j77r", "template_u66z0n5", values).then(
      () => setMailSuccess({ success: true, displayMessage: true }),
      () => setMailSuccess({ success: false, displayMessage: true }),
    );
  };

  useEffect(() => {
    setTimeout(
      () => setMailSuccess({ success: null, displayMessage: false }),
      5000,
    );
  }, [mailSuccess]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(contactSchema) });

  const onSubmit = (data) => {
    const values = {
      lastname: data.lastname,
      firstname: data.firstname,
      email: data.email,
      message: data.message,
    };
    sendEmail(values);
  };

  return (
    <div className="flex flex-col gap-16">
      <motion.div
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.4,
            },
          },
        }}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="bg-pattern-diag flex w-full flex-col items-center justify-center gap-16 self-center px-4 py-16 xl:px-32 xl:py-32"
      >
        <AnimatedTitle
          title="Des projets web plus classiques ? Je suis aussi là pour ça."
          tag="h2"
        />

        <motion.p
          variants={{
            hidden: { opacity: 0, y: 40, scale: 1.1 },
            visible: {
              opacity: 1,
              y: 0,
              scale: 1,
              transition: {
                duration: 0.4,
                ease: "easeOut",
              },
            },
          }}
          className="text-primary-200 px-4 text-center leading-relaxed xl:px-32 xl:text-2xl"
        >
          Mes compétences en design et développement web me permettent de
          réaliser des projets variés, du site vitrine au e-commerce. Ensemble,
          nous pouvons donner vie à votre projet !
        </motion.p>
        <div className="from-primary-400 to-primary-800/80 relative w-full rounded-2xl bg-linear-to-b p-px md:w-11/12 2xl:w-3/5">
          <form
            ref={form}
            onSubmit={handleSubmit(onSubmit)}
            className="from-primary-800 to-primary-bg flex flex-col items-end gap-5 rounded-2xl bg-linear-180 p-8"
          >
            <CustomInput
              fieldName={"Nom"}
              placeholder={"Votre nom"}
              {...register("lastname")}
            />
            {errors.lastname && (
              <p className="self-start text-xs leading-0 text-red-400">
                {errors.lastname.message}
              </p>
            )}
            <CustomInput
              fieldName={"Prénom"}
              placeholder={"Votre prénom"}
              {...register("firstname")}
            />
            {errors.firstname && (
              <p className="self-start text-xs leading-0 text-red-400">
                {errors.firstname.message}
              </p>
            )}
            <CustomInput
              fieldName={"Mail"}
              placeholder={"Votre adresse e-mail"}
              {...register("email")}
            />
            {errors.email && (
              <p className="self-start text-xs leading-0 text-red-400">
                {errors.email.message}
              </p>
            )}
            <div className="flex w-full flex-col gap-1">
              <label htmlFor={"Message"}>Message *</label>
              <textarea
                rows={7}
                id={"message"}
                placeholder={"Votre message"}
                className="bg-primary-bg border-primary-500/50 rounded-lg border p-6"
                {...register("message")}
              />
            </div>
            {errors.message && (
              <p className="self-start text-xs leading-0 text-red-400">
                {errors.message.message}
              </p>
            )}
            <Button type="submit">J&apos;envoie un message</Button>
          </form>
          {mailSuccess.displayMessage && (
            <AnimatePresence>
              <motion.div
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="absolute right-10 -bottom-15 w-fit rounded-xl bg-indigo-900/50 p-4 ring-2 ring-indigo-400"
              >
                {mailSuccess.success
                  ? "E-mail envoyé avec succès !"
                  : "Échec de l'envoie du mail, réessayez plus tard."}
              </motion.div>
            </AnimatePresence>
          )}
        </div>
      </motion.div>
      <footer className="px-4 lg:px-16 xl:px-32">
        <h2 className="py-16 text-center text-2xl font-bold lg:text-left xl:text-4xl">
          Travaillons ensemble !
        </h2>
        <div className="flex flex-col gap-16 border-t-[1px] border-b-[1px] border-white/20 py-16 lg:flex-row lg:justify-between">
          <div className="flex flex-col items-center gap-10 lg:w-2/5 lg:items-start lg:gap-14">
            <p className="text-2xl font-semibold">Maxence Barbançon</p>
            <p className="text-primary-200 text-center leading-loose lg:text-left xl:text-xl">
              Je conçois des applications web sur mesure pensées autour de vos
              besoins réels.
            </p>
            <p className="text-2xl font-semibold">Contact :</p>
            <div className="flex flex-row gap-2">
              <img src="/assets/icons/mail.svg" alt="icône e-mail" />
              <p>maxence.barbancon@gmail.com</p>
            </div>
            <Button
              onClick={() =>
                window
                  .open("https://cal.com/maxence-barbancon-w75rjo", "_blank")
                  .focus()
              }
            >
              Je réserve un appel gratuit
            </Button>
          </div>
          <div className="flex flex-col items-center gap-6 lg:items-start">
            <p className="text-2xl font-semibold">Services</p>
            <p className="text-primary-200">Développement sur mesure</p>
            <p className="text-primary-200">Site vitrine et portfolio</p>
            <p className="text-primary-200">Autres projets web</p>
          </div>
          <div className="flex flex-col items-center gap-6 lg:items-start">
            <p className="text-2xl font-semibold">À propos</p>
            <p className="text-primary-200">À propos de moi</p>
          </div>
          <div className="flex flex-col items-center gap-6 lg:items-start">
            <p className="text-2xl font-semibold">Pages légales</p>
            <p className="text-primary-200">Mentions légales</p>
          </div>
        </div>
        <div className="flex flex-col items-center gap-10 py-8 lg:flex-row-reverse lg:justify-between">
          <div className="flex flex-row items-center gap-4">
            <img src="/assets/logos/linkedin.svg" alt="logo LinkedIn" />
            <p>Connectons-nous sur LinkedIn !</p>
          </div>
          <p>Maxence Barbançon ©2025</p>
        </div>
      </footer>
    </div>
  );
}
