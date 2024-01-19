import { Button } from '@/components/ui/button';
import '../globals.css';
import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
	return (
		<>
			<section className='bg-blue-50 bg-dotted-pattern bg-contain py-5 md:py-10'>
				<div className='wrapper grid grid-cols-1 gap-5 md:grid-cols-2 2xl:gap-0'>
					<div className='flex flex-col justify-center gap-8'>
						<h1 className='h1-bold'>
							Host, Connect, Celebrate: Your Events, Our Platform!
						</h1>
						<p className='p-regular-20 md:p-regular-24'>
							Book and learn helpful tips from 3,168+ mentors in world-class
							companies with our global community.
						</p>
						<Button
							variant={'outline'}
							size={'lg'}
							asChild
							className='button w-full am:w-fit bg-blue-200 hover:bg-blue-100'
						>
							<Link href={'#events'}>Explore Now</Link>
						</Button>
					</div>

					<Image
						src={'/assets/images/hero.png'}
						alt='Hero'
						height={1000}
						width={1000}
						className='max-h-[70vh] object-contain object-center 2xl:max-h-[50vh]'
					/>
				</div>
			</section>

			<section id='events' className='wrapper my-8 flex flex-col md:gap-12'>
				<h2 className='h2-bold'>
					Trust by <br /> Thousands of Events
				</h2>

				<div className='frlex w-full flex-col gap-5 md:flex-row'>
					Search Category-Filter
				</div>
			</section>
		</>
	);
}
