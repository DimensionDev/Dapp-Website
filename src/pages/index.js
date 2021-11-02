import * as React from "react"
import { useState, useEffect } from "react"
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { Card } from '../components/Card';
import { SEO } from '../components/SEO';

// markup
const IndexPage = () => {
  const domainList = ['elephant', 'dog', 'human']
  const [isAdd, setAdd] = useState(false)
  const [domainText, setDomainText] = useState('elephant')
  const [domainIndex, setDomainIndex] = useState(0)
  const [pause, setPause] = useState(false)

  useEffect(() => {
    const timer = setInterval(() => {
      if (pause) {
        return
      } 

      if (!isAdd) {
        if (domainText.length > 0) {
          setDomainText(domainText.slice(0, domainText.length - 1))
        } else {
          setAdd(true)
          setDomainIndex(domainList[domainIndex + 1] ? domainIndex + 1 : 0)
        }
      } else {
        const currentLetter = domainList[domainIndex][domainText.length]
        if (currentLetter) {
          setDomainText(domainText + currentLetter)
        } else {
          setPause(true)
          setTimeout(() => setPause(false), 2000)
          setAdd(false)
        }
      }
    }, Math.random() * 300)

    return () => clearInterval(timer)
  }, [domainText, domainIndex, isAdd, pause])
  return (
    <main>
      <SEO title="D.APP" />
      <Navbar />
      <div className="mt-32 max-w-index w-9/12 max-sm:w-10/12 mx-auto text-white">
        <p className="text-base mb-16">
          When the decentralization becomes the reality for the world , do you want to have a
          free webspace to host your own decentralized project ? Now we can provide you a
          free GitHub URL like one of these :
        </p>
        <div className="w-full bg-blue-main-dark mt-14 h-20 lg:h-24 flex items-center max-sm:h-12">
          <p className="pl-3 max-sm:text-xl text-3xl sm:text-4xl lg:text-5xl text-blue-underline font-extrabold">
            Https://<span className={!pause ? "border-r-2 lg:border-r-4 border-blue-underline pr-px lg:pr-1 mr-px lg:mr-1" : ""}>{domainText}</span>.d.app
          </p>
        </div>  
        <p className="text-base my-16">
          Please follow these steps to get your own free d.app subdomain for your GitHub page
        </p>
        <Card title="Phase 01" color="#5653FF">
          <p>Get your own GitHub Page : If you haven’t have a GitHub Page , 
            it’s a perfect time for you to log in to your GitHub account and set up your GitHub Page 
            by following the instructions <a href="https://pages.github.com/" target="_blank" rel="noreferrer" className="font-semibold underline text-underline-offset hover:opacity-80">here</a>. 
            To get a head start you can simply use the generator with one of 
            the provided themes and add some content to your new page.
          </p>
        </Card>
        <Card title="Phase 02" color="#030080">
          <p>Choose a subdomain : Now you should determine your d.app subdomain: either choose your username or the name of your repo according to the existing GitHub Pages URL . More details in the wiki.</p>
        </Card>
        <Card title="Phase 03" color="#030080">
          <p>How to apply for your subdomain : 
            Add a file named “CNAME” to your repo with a single line matching the domain you have chosen 
            (e.g. “xxx.d.app” without quotes). If you have any problems,
            please check out the section about <a href="https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site#creating-and-committing-a-cname-file" target="_blank" className="font-semibold underline text-underline-offset hover:opacity-80">Custom URLs</a> at GitHub Pages Help.
          </p>
        </Card>
        <Card title="Phase 04" color="#030080">
          <p>Time for waiting : Make a pull request in our GitHub repository that adds your subdomain to the list of existing D.APP domains to finish the procedure . Your new URL would go live as soon as possible. (please keep an eye on your pull request in case of a naming conflict or a question from our side).</p>
        </Card>
        <Card title="Phase 05" color="#030080">
          <p>Remember to save your subdomain under “Custom domain”. <a href="https://docs.github.com/cn/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site" target="_blank" rel="noreferrer" className="font-semibold underline text-underline-offset hover:opacity-80">For more details</a>.</p>
        </Card>
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
