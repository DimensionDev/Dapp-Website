import * as React from "react"
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { ListCard } from '../components/ListCard';
import { SEO } from '../components/SEO';

const ListPage = () => {
  return (
    <main>
      <SEO title="D.APP" />
      <Navbar />
      <div className="mt-32 xl:max-w-5-1xl max-w-index w-10/12 mx-auto text-white flex flex-wrap xl:justify-between justify-center">         
        <ListCard maxWidth={500} title="01" color="#5653FF" text="Get your own GitHub Page : If you haven’t have a GitHub Page , it’s a perfect time for you to log in to your GitHub account and set up your GitHub Page by following the instructions here. To get a head start you can simply use the generator with one of the provided themes and add some content to your new page." />
        <ListCard maxWidth={500} title="01" color="#030080" text="Get your own GitHub Page : If you haven’t have a GitHub Page , it’s a perfect time for you to log in to your GitHub account and set up your GitHub Page by following the instructions here. To get a head start you can simply use the generator with one of the provided themes and add some content to your new page." />
        <ListCard maxWidth={500} title="01" color="#030080" text="Get your own GitHub Page : If you haven’t have a GitHub Page , it’s a perfect time for you to log in to your GitHub account and set up your GitHub Page by following the instructions here. To get a head start you can simply use the generator with one of the provided themes and add some content to your new page." />
        <ListCard maxWidth={500} title="01" color="#030080" text="Get your own GitHub Page : If you haven’t have a GitHub Page , it’s a perfect time for you to log in to your GitHub account and set up your GitHub Page by following the instructions here. To get a head start you can simply use the generator with one of the provided themes and add some content to your new page." />
        <ListCard maxWidth={500} title="02" color="#030080" text="Choose a subdomain : Now you should determine your d.app subdomain: either choose your username or the name of your repo according to the existing GitHub Pages URL . More details in the wiki." />
        <ListCard maxWidth={500} title="03" color="#030080" text="How to apply for your subdomain : Add a file named “CNAME” to your repo with a single line matching the domain you have chosen (e.g. “xxx.d.app” without quotes). If you have any problems, please check out the section about Custom URLs at GitHub Pages Help." />
        <ListCard maxWidth={500} title="04" color="#030080" text="Time for waiting : Make a pull request in our GitHub repository that adds your subdomain to the list of existing D.APP domains to finish the procedure . Your new URL would go live as soon as possible. (please keep an eye on your pull request in case of a naming conflict or a question from our side)." />
        <ListCard maxWidth={500} title="05" color="#030080" text="Remember to save your subdomain under “Custom domain”. For more details." />               
      </div>
      <Footer />
    </main>
  )
}

export default ListPage
