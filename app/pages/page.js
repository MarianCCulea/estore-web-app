import Banner from '../components/atoms/Banner';
import Header from '../components/organisms/navigation/header/Header';
import Feed from './Feed';

export default function Page() {
  return (
    <div className="bg-gray-200 ">
      <Header />
      <main className="max-w-screen-xl mx-auto">
        <Banner />
        <Feed />
      </main>
    </div>
  );
}
