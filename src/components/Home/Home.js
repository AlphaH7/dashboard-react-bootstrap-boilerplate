import React, { useEffect } from "react";
import Layout from "../Layout/Layout";
import { getQuests, getPostFilters } from "../../utils/ApiHelper";
import ApiClient from "../../utils/ApiClient";
import NewMembersSection from "../NewMembersSection/NewMembersSection";
import RecentPostsSection from "../RecentPostsSection/RecentPostsSection";

function Home() {



  const getUserQuests = async () => {
    try {
      const response = await getQuests();
      console.log(response);
    } catch (apierror) {
      const client = new ApiClient();
      client.processError(apierror);
    }
  }



  useEffect(
    () => {      
      getUserQuests()
    }, []
  )

  return (
    <Layout>
      <div className="w-full max-w-view mx-auto">
        <div className="d-flex flex-row mt-4 justify-between animate-from-top">
          <img src="/landing_bg.png" alt="Landing Background" className="w-full" />
        </div>
        <section className="d-flex flex-row mt-4 justify-between">
          <aside className="flex-col w-25">
            <NewMembersSection />
          </aside>

          <main className="flex-col flex-grow mx-3 w-50">
            <RecentPostsSection />
          </main>

          <aside className="flex-col w-25">
            <div className="card rounded p-3">
              <h2 className="text-md">Notifications</h2>
              <ul className="list-group mt-2">
                <li className="list-group-item rounded">Notification 1</li>
                <li className="list-group-item rounded">Notification 2</li>
                <li className="list-group-item rounded">Notification 3</li>
              </ul>
            </div>
          </aside>
        </section>

        <footer className="py-4 bg-secondary text-primary mt-5">
          <p className="text-center text-xl">Footer Content Here</p>
        </footer>
      </div>
    </Layout>
  );
}

export default Home;
