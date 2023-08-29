"use client";
import AnimatedText from "@/components/AnimatedText";
import Layout from "@/components/Layout";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React, { useRef, useState, useEffect, Suspense } from "react";
import { motion, useMotionValue } from "framer-motion";
import TransitionEffect from "@/components/TransitionEffect";
import user from "../../public/images/profile/boy.png";
import GithubReo from "@/components/GithubReo";
import Youtube from "@/components/Youtube";
import { AiOutlineComment, AiOutlineHeart } from "react-icons/ai";

const FramerImage = motion(Image);

const MovingImg = ({ title, img, link }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const imgRef = useRef(null);

  function handleMouse(event) {
    imgRef.current.style.display = "inline-block";
    x.set(event.pageX);
    y.set(-10);
  }

  function handleMouseLeave(event) {
    imgRef.current.style.display = "none";
    x.set(0);
    y.set(0);
  }

  return (
    <Link
      href={link}
      target="_blank"
      onMouseMove={handleMouse}
      onMouseLeave={handleMouseLeave}
    >
      <h2 className="capitalize text-xl font-semibold hover:underline">
        {title}
      </h2>
      <FramerImage
        style={{ x: x, y: y }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1, transition: { duration: 0.2 } }}
        ref={imgRef}
        src={img}
        alt={title}
        width={40}
        className="z-10 w-[100%] h-auto hidden absolute rounded-lg md:!hidden"
      />
    </Link>
  );
};

const FeaturedArticle = ({
  img,
  title,
  type,
  summary,
  link,
  react,
  comment,
  reading,
}) => {
  return (
    <article
      className="w-full h-[240px] lg:h-[420px] flex items-center justify-between relative  rounded-br-xl
      rounded-3xl border border-solid border-borderColor bg-light shadow-sm p-12 dark:bg-dark dark:border-light
      lg:flex-col lg:p-4 xl:p-4 xs:rounded-2xl xs:rounded-br-3xl xs:p-4 "
    >
      <div
        className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-dark dark:bg-light
  rounded-br-3xl xs:-right-2 sm:h-[102%] xs:w-full xs:rounded-[1.5rem]
  "
      />
      <Link
        href={link}
        target="_blank"
        className="w-1/2 cursor-pointer overflow-hidden rounded-lg lg:w-full"
      >
        <FramerImage
          src={img}
          alt={title}
          className="w-full h-full"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
          width={100}
          height={200}
          priority
          sizes={200}
        />
      </Link>

      <div className="w-full flex flex-col items-start justify-between pl-8 lg:w-full lg:pl-0 lg:pt-6">
        <div className="inline-flex ">
          <span className="text-primary text-sm font-semibold dark:text-primaryDark xs:text-base uppercase">
            {type}
          </span>
          <p className="flex absolute top-0 right-0 p-6 font-lexend lg:hidden">
            {reading}
          </p>
        </div>
        <Link
          href={link}
          target="_blank"
          className="hover:underline underline-offset-2"
        >
          <h2 className="my-1 w-full text-left text-[17px] font-bold dark:text-light lg:text-xl xs:text-xl">
            {title}
          </h2>
        </Link>
        <p className="my-1 text-sm font-lexend text-dark dark:text-light sm:text-sm">
          {summary}
        </p>
        <div className="mt-2 flex justify-between">
          <div className="rounded-lg flex">
            <span className="mr-2 font-semibold">By</span>{" "}
            <Image
              src={user}
              alt="user"
              className="lg:w-6 xl:w-6 xl:h-6 md:w-6 md:h-6"
            />{" "}
            <Link href="/about" className="font-semibold underline ml-2">
              medcode
            </Link>
          </div>
          <div className="inline-flex text-center lg:ml-20 2xl:ml-[70%] xl:ml-[39%] text-gray-600">
            <p className="inline-flex px-3 font-bold">
              <AiOutlineComment fontSize={24} /> {react}
            </p>
            <p className="inline-flex font-bold">
              <AiOutlineHeart  fontSize={24}/>{comment}
            </p>
          </div>
        </div>
      </div>
    </article>
  );
};

const articles = () => {
  const [blog, setBlogs] = useState([]);
  const [trends, setTrends] = useState([]);
  const [subscriberCount, setSubscriberCount] = useState();
  const [videoCount, setVideoCount] = useState([]);
  const getData = () => {
    const key = "AIzaSyBI7fNLL0KemPYHgO8bvsCwAKL1OMNOwAA";
    fetch(
      `https://www.googleapis.com/youtube/v3/channels?part=statistics&id=UC1dm-Rczjp52egzJTL__s8A&key=AIzaSyBI7fNLL0KemPYHgO8bvsCwAKL1OMNOwAA`
    )
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        const base = data.items[0].statistics;
        setSubscriberCount(base.subscriberCount);
        setVideoCount(base.videoCount);
        console.log("youtube", data);
      });
  };

  const fetchData = () => {
    fetch("https://dev.to/api/articles?username=med_code")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setBlogs(data);
        setTrends(data);
      });
  };
  useEffect(() => {
    fetchData();
    getData();
  }, []);

  return (
    <>
      <Head>
        <title>MedCode|Blogs</title>
        <meta
          name="description"
          content="Browse through MedCode collection of software engineering articles blogs and 
        tutorials and blogs on Next.js, React.js, java, javascript html ,css web development, and more. 
        Gain valuable insights and stay up-to-date with SEO tips for building a developer portfolio."
        />
      </Head>
      <TransitionEffect />
      <main className="w-full mb-16 flex flex-col items-center justify-center overflow-hidden dark:text-light">
        <Layout className="pt-16">
          <AnimatedText
            text="Words Can Change The World!"
            className="mb-16 text-2xl
          lg:!text-5xl sm:mb-8 sm:!text-6xl xs:!text-4xl
          "
          />

          <section className="cont w-full">
            <div className="art grid gap-16 lg:gap-8 md:grid-cols-1 md:gap-y-16">
              {blog.length > 0}{" "}
              {blog.map((item) => (
                <FeaturedArticle
                  key={item.id}
                  type={item.type_of}
                  reading={item.readable_publish_date}
                  img={item.cover_image}
                  title={item.title}
                  react={item.public_reactions_count}
                  comment={item.comments_count}
                  summary={item.description}
                  link={item.url}
                ></FeaturedArticle>
              ))}
            </div>

            <article className="slider">
              <div className="w-full flex p-2 flex-col overflow-hidden rounded-2xl border border-borderColor bg-[#e7dff3] text-gray-800 transition hover:translate-y-2 hover:shadow-lg">
                <h5 className="text-xl font-lexend p-4 mb-4 text-borderColor underline">
                  TRENDING POST{" "}
                </h5>
                {trends.length > 0}
                {trends.map((item, index) =>
                  index < 4 ? (
                    <Link key={item.id} href={item.url} target="blank">
                      <div className="flex p-2">
                        <div className="flex items-center">
                          <FramerImage
                            src={item.cover_image}
                            alt={item.title}
                            width={300}
                            height={400}
                            className="w-full rounded-lg"
                          />
                        </div>
                        <div className="inline font-lexend ml-2">
                          <p className="text-sm text-gray-700 hover:underline hover:cursor-pointer">
                            {item.description}
                          </p>
                          <p className="text-xs text-borderColor underline">
                            {item.tags}
                          </p>
                        </div>
                      </div>
                      <div className="line bg-borderColor"></div>
                    </Link>
                  ) : null
                )}
              </div>
              <>
                <div className="category col-span-12 mt-6 md:col-span-6 lg:col-span-4 md:order-1 grid gap-4 xl:gap-6">
                  <GithubReo />
                </div>
                <div className="category col-span-12 mt-6 md:col-span-6 lg:col-span-4 md:order-1 grid gap-4 xl:gap-6">
                  <Youtube sub={subscriberCount} video={videoCount} />
                </div>
              </>
            </article>
          </section>
        </Layout>
      </main>
    </>
  );
};
export default articles;
