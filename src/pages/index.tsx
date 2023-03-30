import Head from "next/head";
import Header from "@/components/Header";
import MixedSelectionModule from "@/components/MixedSelectionModule";
import Sidebar from "@/components/Sidebar";
import { homePlaylists } from "@/mockData";

export default function Home() {
  return (
    <>
      <Head>
        <title>Nocturne Op. 9 No. 1 - Chopin by Phil Best</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <div className="bg-gray-3">
        <main className="w-lg bg-white mx-auto px-8">
          <div>
            <div className="relative">
              <div
                style={{
                  padding: "30px 30px 0 0",
                  margin: "0 330px 0 0",
                  borderRight: "1px solid #f2f2f2",
                }}
              >
                {homePlaylists.map((el) => (
                  <MixedSelectionModule
                    key={el.title}
                    title={el.title}
                    data={el.data}
                  />
                ))}
              </div>
              <div className="absolute top-7 right-0 w-300px">
                <Sidebar />
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
