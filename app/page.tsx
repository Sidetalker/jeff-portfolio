import { ExperienceCard } from "@/components/experience-card"
import { SkillBadge } from "@/components/skill-badge"
import { BookModal } from "@/components/book-modal"
import Image from "next/image"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <div className="mx-auto max-w-3xl px-6 py-16 md:py-24">
        {/* Header */}
        <header className="mb-16 text-center">
          <div className="mb-6 flex justify-center">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/jeff-EknggFaR7kGnDSxOd817k4koBN2M0t.jpg"
              alt="Jeffrey Farrell"
              width={150}
              height={150}
              className="rounded-full border-4 border-border"
            />
          </div>

          <h1 className="mb-3 text-4xl font-bold tracking-tight text-foreground md:text-5xl">Jeffrey Farrell</h1>
          <p className="mb-6 text-xl text-muted-foreground md:text-2xl">Full Stack Developer</p>
          <p className="mb-8 text-base leading-relaxed text-muted-foreground">
            Software engineer based in Dedham, Massachusetts, specializing in web applications and full-stack
            development. Open to new opportunities.
          </p>

          <div className="flex flex-col items-center justify-center gap-3 text-base">
            <a href="https://linksapprentice2.github.io/game2.html" className="text-primary hover:underline">
              Check out the first game I've made right here.
            </a>
            <a href="https://linksapprentice2.github.io/game3.html" className="text-primary hover:underline">
              This is me fooling around with three.js. I'll be updating this "game" continually.
            </a>
            <a
              href="https://github.com/linksapprentice1"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              Check out my GitHub profile here.
            </a>
            <a
              href="https://www.facebook.com/jeff.farrell.9699"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              Check out my Facebook profile here.
            </a>
            <BookModal />
          </div>
        </header>

        <section className="mb-16">
          <h2 className="mb-6 text-center text-2xl font-semibold text-foreground">Education</h2>
          <div className="flex justify-center">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/diploma-yWVv7nKz1kZgpDNkOAks6964CivXZf.jpg"
              alt="Bachelor of Science in Computer Science from Rensselaer Polytechnic Institute"
              width={600}
              height={450}
              className="rounded-lg border border-border shadow-lg"
            />
          </div>
          <p className="mt-4 text-center text-sm text-muted-foreground">
            Bachelor of Science in Computer Science
            <br />
            Rensselaer Polytechnic Institute, 2014
          </p>
        </section>

        {/* Skills Section */}
        <section className="mb-16">
          <h2 className="mb-6 text-2xl font-semibold text-foreground">Skills</h2>
          <div className="flex flex-wrap gap-2">
            <SkillBadge>PHP</SkillBadge>
            <SkillBadge>JavaScript</SkillBadge>
            <SkillBadge>Python</SkillBadge>
            <SkillBadge>Bash</SkillBadge>
            <SkillBadge>MVC</SkillBadge>
            <SkillBadge>Grails</SkillBadge>
            <SkillBadge>AWS</SkillBadge>
            <SkillBadge>SQL</SkillBadge>
            <SkillBadge>HTML</SkillBadge>
            <SkillBadge>CSS</SkillBadge>
            <SkillBadge>Bootstrap</SkillBadge>
            <SkillBadge>AJAX</SkillBadge>
            <SkillBadge>Full Stack Development</SkillBadge>
          </div>
        </section>

        {/* Experience Section */}
        <section>
          <h2 className="mb-6 text-2xl font-semibold text-foreground">Experience</h2>
          <div className="space-y-8">
            <ExperienceCard
              title="Full-Stack Web Developer"
              company="Jassby, Inc."
              period="Jan 2018 - Apr 2018"
              duration="4 mos"
              location="Waltham, MA"
              description="Coded landing pages (including the sign-in and sign-up processes [which included bank information and other features not typically in a sign-up process]), in addition to pages on the inside of the web application. Had to respond to changes in requirements, and did front-end and back-end code for features worked on. The site was mobile-responsive. Some changes in requirements were overhauls and not quick fixes."
              skills={["PHP", "JavaScript", "HTML", "Bootstrap", "CSS"]}
            />

            <ExperienceCard
              title="Software Developer"
              company="CABEM Technologies"
              period="Mar 2016 - Feb 2017"
              duration="1 yr"
              description="Added features to and co-maintained internal and external IdentityForce web applications (www.identityforce.com). For a shorter time frame, worked on NTS applications (www.nts.com). Some of the more notable projects included adding two-factor authentication (full-stack, in addition to settings functionality [phone call, text message, or email]) to multiple web apps, incorporating Vantiv credit card processing into IDF web applications for new cards (alongside the existing Authorize.Net for current cards), and designing an API for IDF using swagger.io."
              skills={["PHP", "Model-View-Controller (MVC)", "JavaScript", "AJAX", "HTML", "CSS"]}
            />

            <ExperienceCard
              title="Software Developer"
              company="Rezzit21"
              period="Aug 2015 - Dec 2015"
              duration="5 mos"
              location="Boston, MA"
              description="Reskinned parts of the app, added features (front-end and back-end work for features added), and enhanced existing pages. Moved the site to AWS."
              skills={["PHP", "JavaScript"]}
            />

            <ExperienceCard
              title="Technical Support"
              company="inSitu Mobile"
              period="Mar 2015 - Jun 2015"
              duration="4 mos"
              location="Cambridge, MA"
              description="Provided tech support. Added features to an existing web application and documented them in blog entries. Coded the front-end and back-end for various features, which were often related to tracking and routing."
              skills={["Grails", "JavaScript"]}
            />
          </div>
        </section>

        {/* Footer */}
        <footer className="mt-16 border-t border-border pt-8 text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Jeffrey Farrell. All rights reserved.</p>
        </footer>
      </div>
    </main>
  )
}
