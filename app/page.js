import Banner from './components/atoms/Banner';
import Feed from './components/organisms/Feed';
import Header from './components/organisms/navigation/header/Header';

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
