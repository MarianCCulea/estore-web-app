import Banner from './Banner';
import Feed from './Feed';
import Header from './components/navigation/header/Header';

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
