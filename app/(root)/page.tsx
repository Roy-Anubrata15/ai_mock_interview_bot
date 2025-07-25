import React from 'react'
import {Button} from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import {dummyInterviews} from "@/constants";
import InterviewCard from "@/components/InterviewCard";
const Page = () => {
    return (
       < >
          <section className= "card-cta">
              <div className= "flex flex-col gap-6 col max-w-lg">
                 <h2> Get Interview_Ready with AI Powered Practice and FeedBack </h2>
              <p className="text-lg">
                  Practice on Real Interview Questions and get instant feedback
              </p>
                  <Button asChild className="btn-primary max-sm:w-full" >
                  <Link href="/interview "> Start new Interview</Link>
                  </Button>
              </div>

              <Image src = "/robot.png" alt = "robo" width ={400} height  ={400} className="max-sm:hidden"/>
          </section>
       <section className= "flex flex-col gap-2 mt-6">
                      <h2 >Your Interviews </h2>

           <div className= "Interview section">

               {dummyInterviews.map((interview) =>(<InterviewCard{...interview} key={ interview.id}/>))}
           </div>
       </section>
           <section className= "flex flex-col   ">

               <h2>Take an Interview</h2>
               <div className= "Interview section">

                   {dummyInterviews.map((interview) =>(<InterviewCard{...interview} key={ interview.id}/>))}
                   {/*<p>You haven't taken any  interviews yet </p>*/}
               </div>
           </section>
       </>
    )
}
export default Page
