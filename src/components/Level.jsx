import React from 'react';
import { Link } from 'react-router-dom';

const Level = () => {
  return (
    <div className="w-full pt-36 mb-8">
      <div className="text-center mb-8 md:mb-12 flex flex-col items-center justify-center">
        <div className="flex items-center">
          <span className="block w-10 h-2 bg-teal-900 mx-4"></span>
          <h1 className="text-teal-900 font-bold font-serif text-[24px] md:text-[32px] lg:text-[40px]">
            COURSES
          </h1>
          <span className="block w-10 h-2 bg-teal-900 mx-4"></span>
        </div>
      </div>

      <div className="flex flex-col bg-white py-2 px-4 md:px-12 pl-20 pr-20">
        {/* First Row */}
        <div className="flex flex-wrap justify-center items-center gap-4">
          <article className="overflow-hidden rounded-lg border border-gray-100 bg-white shadow-sm w-full sm:w-80 gap-3 mr-10">
            <img
              alt=""
              src="https://st.depositphotos.com/1000137/2646/i/450/depositphotos_26460023-stock-photo-group-of-cute-little-prescool.jpg"
              className="h-48 w-full object-cover rounded-t-lg"
            />

            <div className="p-4 sm:p-6 px-4 py-6 flex flex-col items-center">
              <a href="#">
                <h3 className="text-xl font-medium text-teal-600">LEVEL ONE</h3>
              </a>

              <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
                Dive into the world of advanced learning with our comprehensive
                Level One courses designed to equip you with essential skills
                and knowledge across various domains. Whether you're looking to
                enhance your career prospects, pursue personal growth, or simply
                expand your horizons, our courses offer a blend of theoretical
                insights and practical applications tailored to meet your needs.
                Our experienced instructors guide you through every step,
                ensuring you gain a solid foundation and develop a deep
                understanding of complex concepts. Join us today and embark on a
                journey of continuous learning and discovery.
              </p>

              <Link
                to="/LevelOneDetails"
                className="inline-flex items-center gap-1 text-sm font-medium text-teal-400 mt-4"
              >
                Find out more
                <span
                  aria-hidden="true"
                  className="block transition-all group-hover:ml-0.5 transform group-hover:rotate-180"
                >
                  &rarr;
                </span>
              </Link>
            </div>
          </article>

          <article className="overflow-hidden rounded-lg border border-gray-100 bg-white shadow-sm w-full sm:w-80 mr-10">
            <img
              alt=""
              src="https://media.gettyimages.com/id/1170717275/photo/lets-learn-something-new-today.jpg?s=612x612&w=gi&k=20&c=07IYMQ87SCMKLM3sKi5gNYX6W_QGBWAcYYg6ouoHKZE="
              className="h-48 w-full object-cover rounded-t-lg"
            />

            <div className="p-4 sm:p-6 px-4 py-6 flex flex-col items-center">
              <a href="#">
                <h3 className="text-xl font-medium text-teal-600">LEVEL TWO</h3>
              </a>

              <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
                Elevate your expertise with our Level Two courses, meticulously
                designed to deepen your understanding and hone your skills in
                specialized areas. These advanced programs are tailored for
                learners who have completed Level One and are eager to delve
                deeper into the complexities of their chosen fields. Our courses
                feature hands-on projects, industry-relevant case studies, and
                exclusive access to expert insights, preparing you for
                real-world challenges and opportunities. Whether you're aiming
                for leadership roles, seeking to innovate within your
                profession, or pursuing academic excellence, Level Two courses
                set you on the path to achieving your highest aspirations.
                Discover how our rigorous curriculum and personalized guidance
                can propel your career forward.
              </p>

              <Link
                to="/LevelTwoDetails"
                className="inline-flex items-center gap-1 text-sm font-medium text-teal-400 mt-4"
              >
                Find out more
                <span
                  aria-hidden="true"
                  className="block transition-all group-hover:ml-0.5 transform group-hover:rotate-180"
                >
                  &rarr;
                </span>
              </Link>
            </div>
          </article>

          <article className="overflow-hidden rounded-lg border border-gray-100 bg-white shadow-sm w-full sm:w-80">
            <img
              alt=""
              src="https://media.istockphoto.com/id/1338344319/photo/happy-diverse-junior-school-students-children-looking-at-camera-in-classroom.jpg?s=612x612&w=0&k=20&c=rTFnd9t0Zi58eAa_uzHhORC-sMhpGtAISuY48TJVXQ8="
              className="h-48 w-full object-cover rounded-t-lg"
            />

            <div className="p-4 sm:p-6 px-4 py-6 flex flex-col items-center">
              <a href="#">
                <h3 className="text-xl font-medium text-teal-600">
                  LEVEL THREE
                </h3>
              </a>

              <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
                Embark on a transformative journey with our Level Three courses,
                designed for ambitious individuals ready to push boundaries and
                excel in their fields. These advanced programs are crafted to
                challenge and inspire, equipping you with sophisticated tools
                and strategies to tackle complex problems and drive innovation.
                Through immersive projects, collaborative research, and direct
                engagement with industry leaders, you'll not only deepen your
                expertise but also forge meaningful connections that can propel
                your career forward. Level Three is your gateway to becoming a
                thought leader, poised to make significant contributions to your
                discipline and beyond. Are you ready to redefine success?
              </p>

              <Link
                to="/LevelThreeDetails"
                className="inline-flex items-center gap-1 text-sm font-medium text-teal-400 mt-4"
              >
                Find out more
                <span
                  aria-hidden="true"
                  className="block transition-all group-hover:ml-0.5 transform group-hover:rotate-180"
                >
                  &rarr;
                </span>
              </Link>
            </div>
          </article>
        </div>

        {/* Second Row */}
        <div className="flex flex-wrap justify-center items-center gap-4 mt-8">
          <article className="overflow-hidden rounded-lg border border-gray-100 bg-white shadow-sm w-full sm:w-80 mr-10">
            <img
              alt=""
              src="https://media.istockphoto.com/id/1475870297/photo/kids-fun-stretching-and-classroom-hands-in-the-air-for-happy-children-assessment-growth-in-a.webp?b=1&s=170667a&w=0&k=20&c=fo0U72QFIHc2F39bKf0FBvMpEOzC08EY-dWlEOUCvuI="
              className="h-48 w-full object-cover rounded-t-lg"
            />

            <div className="p-4 sm:p-6 px-4 py-6 flex flex-col items-center">
              <a href="#">
                <h3 className="text-xl font-medium text-teal-600">
                  LEVEL FOUR
                </h3>
              </a>

              <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
                Advance your expertise and prepare for the pinnacle of
                achievement with our Level Four courses. Designed for learners
                who have demonstrated exceptional dedication and proficiency,
                these advanced programs are tailored to deepen your
                understanding and refine your skills in specialized areas.
                Through rigorous academic challenges, collaborative research
                projects, and mentorship from leading experts, you'll not only
                master complex concepts but also cultivate innovative thinking
                and problem-solving abilities. Level Four is your stepping stone
                to becoming a leader in your field, equipped with the knowledge
                and skills to drive change and make significant contributions.
                Are you ready to reach new heights in your educational journey?
              </p>

              <Link
                to="/LevelFourDetails"
                className="inline-flex items-center gap-1 text-sm font-medium text-teal-400 mt-4"
              >
                Find out more
                <span
                  aria-hidden="true"
                  className="block transition-all group-hover:ml-0.5 transform group-hover:rotate-180"
                >
                  &rarr;
                </span>
              </Link>
            </div>
          </article>

          <article className="overflow-hidden rounded-lg border border-gray-100 bg-white shadow-sm w-full sm:w-80 mr-10">
            <img
              alt=""
              src="https://media.istockphoto.com/id/1446488662/photo/group-work-of-school-children-students-discuss-a-collective-project-at-school.jpg?s=612x612&w=0&k=20&c=TcK_54lNHDS8i3kOI00hiXjz8_ZD9r7_Y9sV-Hz8pHU="
              className="h-48 w-full object-cover rounded-t-lg"
            />

            <div className="p-4 sm:p-6 px-4 py-6 flex flex-col items-center">
              <a href="#">
                <h3 className="text-xl font-medium text-teal-600">
                  LEVEL FIVE
                </h3>
              </a>

              <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
                Achieve unparalleled mastery and specialize in your field with
                our Level Five courses, designed for the most dedicated
                learners. These advanced programs are tailored for individuals
                who have demonstrated exceptional commitment and proficiency
                throughout their educational journey. By completing Level Five,
                you'll not only deepen your understanding of cutting-edge
                theories and practices but also gain the ability to contribute
                significantly to your discipline. Our courses feature intensive
                research projects, mentorship from leading experts, and
                opportunities for publication and collaboration with peers
                around the globe. Ready to elevate your expertise and make a
                lasting impact? Level Five is your invitation to join the ranks
                of the most accomplished professionals and scholars in your
                field.
              </p>

              <Link
                to="/LevelFiveDetails"
                className="inline-flex items-center gap-1 text-sm font-medium text-teal-400 mt-4"
              >
                Find out more
                <span
                  aria-hidden="true"
                  className="block transition-all group-hover:ml-0.5 transform group-hover:rotate-180"
                >
                  &rarr;
                </span>
              </Link>
            </div>
          </article>

          <article className="overflow-hidden rounded-lg border border-gray-100 bg-white shadow-sm w-full sm:w-80 ">
            <img
              alt=""
              src="https://static8.depositphotos.com/1018113/869/i/450/depositphotos_8693822-stock-photo-emotional-friends.jpg"
              className="h-48 w-full object-cover rounded-t-lg"
            />

            <div className="p-4 sm:p-6 px-4 py-6 flex flex-col items-center ml-3">
              <a href="#">
                <h3 className="text-xl font-medium text-teal-600">LEVEL SIX</h3>
              </a>

              <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
                Advance your expertise and prepare for the pinnacle of
                achievement with our Level Four courses. Designed for learners
                who have demonstrated exceptional dedication and proficiency,
                these advanced programs are tailored to deepen your
                understanding and refine your skills in specialized areas.
                Through rigorous academic challenges, collaborative research
                projects, and mentorship from leading experts, you'll not only
                master complex concepts but also cultivate innovative thinking
                and problem-solving abilities. Level Four is your stepping stone
                to becoming a leader in your field, equipped with the knowledge
                and skills to drive change and make significant contributions.
                Are you ready to reach new heights in your educational journey?
              </p>

              <Link
                to="/LevelSixDetails"
                className="inline-flex items-center gap-1 text-sm font-medium text-teal-400 mt-4"
              >
                Find out more
                <span
                  aria-hidden="true"
                  className="block transition-all group-hover:ml-0.5 transform group-hover:rotate-180"
                >
                  &rarr;
                </span>
              </Link>
            </div>
          </article>
        </div>
      </div>
    </div>
  );
};

export default Level;
