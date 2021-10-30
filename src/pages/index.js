import * as React from "react"
import JadeSvg from '../images/jade.svg'
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { Card } from '../components/Card';

// markup
const IndexPage = () => {
  return (
    <main>
      <Navbar />
      <div className="mt-32 max-w-index w-9/12 max-sm:w-10/12 mx-auto text-white">
        <p className="text-base mb-16">
          When the decentralization becomes the reality for the world , do you want to have a
          free webspace to host your own decentralized project ? Now we can provide you a
          free GitHub URL like one of these :
        </p>
        <div className="w-full bg-blue-main-dark mt-14 h-20 lg:h-24 flex items-center max-sm:h-12">
          <p className="pl-3 max-sm:text-xl text-3xl sm:text-4xl lg:text-5xl text-blue-underline font-extrabold">
            Https://elephant.d.app
          </p>
        </div>  
        <p className="text-base my-16">
          Please follow these steps to get your own free d.app subdomain for your GitHub page
        </p>
        <Card title="Phase 01" color="#5653FF" text="Get your own GitHub Page : If you haven’t have a GitHub Page , it’s a perfect time for you to log in to your GitHub account and set up your GitHub Page by following the instructions here. To get a head start you can simply use the generator with one of the provided themes and add some content to your new page." />
        <Card title="Phase 02" color="#030080" text="Choose a subdomain : Now you should determine your d.app subdomain: either choose your username or the name of your repo according to the existing GitHub Pages URL . More details in the wiki." />
        <Card title="Phase 03" color="#030080" text="How to apply for your subdomain : Add a file named “CNAME” to your repo with a single line matching the domain you have chosen (e.g. “xxx.d.app” without quotes). If you have any problems, please check out the section about Custom URLs at GitHub Pages Help." />
        <Card title="Phase 04" color="#030080" text="Time for waiting : Make a pull request in our GitHub repository that adds your subdomain to the list of existing D.APP domains to finish the procedure . Your new URL would go live as soon as possible. (please keep an eye on your pull request in case of a naming conflict or a question from our side)." />
        <Card title="Phase 05" color="#030080" text="Remember to save your subdomain under “Custom domain”. For more details." />
        <p className="text-base my-14">
          And of course , your page need to provide some reasonable content with a clear connection to DAPP.
        </p>                
        <p className="text-base mt-14 mb-32">
          As the owner of the repository, you keep complete control over your published content. But that also means all rights and duties that come along with publishing a website remain in your responsibility.
        </p>                    
      </div>
      <Footer />
    </main>
  )
}

export default IndexPage
