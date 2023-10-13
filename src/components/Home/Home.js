import React, { useEffect } from "react";
import Layout from "../Layout/Layout";
import { getQuests } from "../../utils/ApiHelper";
import ApiClient from "../../utils/ApiClient";
import NewMembersSection from "../NewMembersSection/NewMembersSection";
import RecentPostsSection from "../RecentPostsSection/RecentPostsSection";
import PopularGroups from "../PopularGroups/PopularGroups";
import QuestsListing from "../QuestsListing/QuestsListing";

function Home() {
  const getUserQuests = async () => {
    try {
      const response = await getQuests();
      console.log(response);
    } catch (apierror) {
      const client = new ApiClient();
      client.processError(apierror);
    }
  };

  useEffect(() => {
    getUserQuests();
  }, []);

  return (
    <Layout>
      <div className="w-full max-w-view mx-auto">
        <div className="d-flex flex-column flex-md-row mt-md-4 justify-between animate-from-top">
          <img
            src="/landing_bg.png"
            alt="Landing Background"
            className="w-full d-none d-md-block "
          />
        </div>
        <section className="d-flex flex-column flex-md-row mt-md-4 justify-between">
          <aside className="flex-col w-md-25">
            <NewMembersSection />
            <div className="pt-3">
              <QuestsListing />
            </div>
          </aside>

          <main className="flex-col mx-md-3 mt-sm-10">
            <RecentPostsSection />
          </main>

          <aside className="flex-col w-md-25">
            <PopularGroups />
          </aside>
        </section>

        <footer className="py-4 text-primary mt-5 flex justify-center items-center">
          <div className="nav-logo animate-from-top mr-4 footer-logo" />
          <div>
            <p className="mb-0 text-footer-gray text-xs">
              Made with ♥ by Alistier X.
            </p>
            <p className="mb-0 text-footer-gray text-xs">
              © Copyright 2023 AX{" "}
              <a
                className="text-footer-gray"
                target="_blank"
                rel="noreferrer"
                href="https://www.alistier.dev"
              >
                www.alistier.dev
              </a>
            </p>
          </div>
        </footer>
      </div>
    </Layout>
  );
}

export default Home;
