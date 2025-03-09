import Header from '@/components/Header';
import WeddingPackages from '@/components/WeddingPackages';
import ThumbsUp from '@/assets/images/thumbsup.svg';
import CreditCard from '@/assets/images/credit-card.svg';
import HomeTown from '@/assets/images/hometown.svg';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="flex flex-col gap-y-16">
      <Header />
      <section className="">
        <WeddingPackages show="popular" type="slider" />
      </section>

      <section className="container mx-auto flex flex-col">
        <h2 className="text-3xl font-bold max-w-md mx-auto text-center mb-8">
          Alasan Mereka Memilih Wedding Package Samawa
        </h2>
        <div className="grid grid-cols-3 gap-10">
          <div className="flex flex-col border rounded-3xl p-8 gap-y-5 items-start">
            <span className="text-color2">
              <ThumbsUp />
            </span>
            <span className="flex flex-col gap-y-2">
              <h6 className="font-bold text-xl">Dipercaya Sejak 1970</h6>
              <p className="">
                Lorem ipsum dolor si amet nikah berkah dunia akhirat nantinya
              </p>
            </span>
            <Link href="#" className="text-color2 hover:underline">
              Learn More
            </Link>
          </div>
          <div className="flex flex-col border rounded-3xl p-8 gap-y-5 items-start">
            <span className="text-color2">
              <CreditCard />
            </span>
            <span className="flex flex-col gap-y-2">
              <h6 className="font-bold text-xl">Dipercaya Sejak 1970</h6>
              <p className="">
                Lorem ipsum dolor si amet nikah berkah dunia akhirat nantinya
              </p>
            </span>
            <Link href="#" className="text-color2 hover:underline">
              Learn More
            </Link>
          </div>

          <div className="flex flex-col border rounded-3xl p-8 gap-y-5 items-start">
            <span className="text-color2">
              <HomeTown className="w-12 h-12" />
            </span>
            <span className="flex flex-col gap-y-2">
              <h6 className="font-bold text-xl">Dipercaya Sejak 1970</h6>
              <p className="">
                Lorem ipsum dolor si amet nikah berkah dunia akhirat nantinya
              </p>
            </span>
            <Link href="#" className="text-color2 hover:underline">
              Learn More
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
