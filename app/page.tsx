import Image from "next/image";
import Hero from '@/components/Hero'
import { FloatingNav } from "@/components/ui/FloatingNavbar";
import { FaHome } from 'react-icons/fa'
import RecentProjects from "@/components/RecentProjects";


export default function Home() {
  return (
    <main className='relative bg-black flex
    justify-center items-center flex-col overflow-hidden
    mx-auto sm:px-10 px-5'>
      <div className='max-w-7x w-full'>
        <FloatingNav navItems={[
          {name: 'Home', link: '/', icon: <FaHome /> }
        ]} />
        <Hero />
        <RecentProjects />
      </div>
    </main>
  );
}
