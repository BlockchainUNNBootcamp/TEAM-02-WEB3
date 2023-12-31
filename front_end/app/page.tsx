import Image from "next/image"
import "./globals.css"

export default function Home() {
  return (

    <div className=" mx-auto text-white">
      <div className="landing h-screen mx-auto flex flex-wrap flex-column justify-center items-center">
        <h1 className="motto text-center w-fit mx-auto p-3 font-bold text-green-600 font-mono ">
          BlockchainUNN DAO
          <span className="contributors flex items-center text-sm left " >
            by TEAM B |<a
                  className="text-green-200"
                  href="https://linktr.ee/somtochukwu1"
                  target="Somtochukwu"
                >
                  Somtochukwu
                </a>
                |
                <a
                  className="text-green-200"
                  href="https://github.com/favxlaw"
                  target="Favour"
                >
                  Favour
                </a>
                |
                <a
                  className="text-green-200"
                  href="https://github.com/frankcodedKing"
                  target="Franklin"
                >
                  Frank
                </a>
          </span>
        </h1>
        <p className="max-w-6xl font-bold motto-details mx-auto">
          A dAPP for <a href="https://blockchainunn.org/" target="BUNN" className="text-green-500">BlockchainUNN</a> created in partial fulfillment of the requirements to be a certified <a href="https://blockchainunn.org/" target="BUNN" className="text-green-500">BlockchainUNN</a> <span className="text-green-200">web3</span> developer.
        </p>

      </div>
      <div className="max-w-screen-2xl mx-auto">

        <p className="flex paragraph backdrop-blur-2xl intro">
          <div >
            <b className="text-4xl">
              What are DAOs and how do they work?
            </b>
            <br />

            DAOs are blockchain-based communities that are designed to bring a new, more open and
            democratic management structure to businesses and other collaborative projects in web3. DAOs are
            owned by their members, who collectively make decisions and manage their funds through smart
            contracts and tokens. DAOs operate without centralized leadership, and the rules and processes of
            their governance are often determined by the code governing the project.
            <br />
            <br />
            Historical evolution of DAOs. DAOs are inspired by the concept of decentralization and autonomy that
            underlies the blockchain technology and the cryptocurrency movement.        Some would argue that
            Bitcoin was the first DAO, as it is a peer-to-peer network that is governed by a set of rules and
            incentives that are enforced by the code and the consensus mechanism.
            <br />
            <br />
            However, DAOs as we know
            them today emerged with the advent of smart contracts, which are self-executing agreements that
            run on the blockchain. The first attempt to create a DAO was The DAO, a project that raised over $150
            million in 2016 to fund various web3 ventures. However, The DAO was hacked and lost about a third
            of its funds, leading to a controversial hard fork of Ethereum and the creation of Ethereum Classic.
            Since then, DAOs have evolved and diversified, and have been used for various purposes and
            functions, such as DeFi, NFT, social impact, media, and more.
          </div>

          <Image
            alt="Introduction To DAOs"
            src="/intro-to-dao.png"
            width={700}
            height={700}
          >
          </Image>
        </p>

        <p className="flex paragraph backdrop-blur-2xl ">
          <Image
            alt="Key components of a DAO"
            src="/components-dao.png"
            width={700}
            height={700}
          >
          </Image>
          <div className="p-2">
            <b className="text-4xl">
              Key components of a DAO.
            </b>
            <br />
            A DAO typically consists of the following components:
            <br />
            <ol>
              <li>
                A smart contract platform, such as Ethereum, that provides the infrastructure and the tools for
                creating and running DAOs.
              </li>

              <li>
                A governance token, which is a type of crypto asset that may entitle the holder to DAO membership
                and voting rights.
              </li>

              <li>
                Governance tokens are usually distributed to the project’s founders, users, backers, and other stakeholders, and can be traded on secondary markets.
              </li>

              <li>
                A treasury, which is a pool of funds that is controlled by the DAO and used to finance the project’s
                activities and initiatives.
              </li>

              <li>
                The treasury is usually funded by the token sales, fees, donations, or
                revenues generated by the DAO.
              </li>

              <li>
                A proposal system, which is a mechanism for submitting, reviewing, and voting on project ideas, requests, or changes.
              </li>

              <li>
                Proposals are usually created by the DAO members and require a certain
                quorum and majority to be approved and executed.
              </li>

              <li>
                A community, which is a group of people who share the same vision and values and participate in theDAO’s governance and operations. The community usually communicates and coordinate
              </li>

            </ol>
          </div>

        </p>

        <p className="flex paragraph backdrop-blur-2xl governance">
          <div>
            <b className="text-4xl">
              DAO Governance
            </b>
            <br />
            DAOs, or decentralized autonomous organizations, are a new form of organizing and collaborating in the web3 space. DAOs are based on blockchain technology and smart contracts, and allow their
            members to have a voice and a stake in the governance and direction of the organization. However, not all DAOs are created equal, and there are different models and approaches to DAO governance. In this blog post, we will explore some of the most common DAO governance models, their pros and
            cons, and some case studies of successful DAO governance.
            <br />
            <b>
              What is DAO Governance?
            </b>
            <br />
            DAO governance is the process of making and implementing decisions within a DAO.
            <br />
            DAO governance involve various aspects, such as:
            <br />
            Setting the vision, mission, and goals of the DAO
            <br />
            Defining the roles and responsibilities of the DAO members
            <br />
            Allocating the resources and funds of the DAO
            <br />
            Developing and updating the rules and policies of the DAO
            <br />
            Resolving conflicts and disputes among the DAO members
            <br />
            Evaluating and improving the performance and impact of the DAO
            <br />
            DAO governance can be formal or informal, centralized or decentralized, and on-chain or off-chain, depending on the design and preferences of the DAO.

          </div>

          <Image
            alt="DAO Governance"
            src="/governance.png"
            width={700}
            height={700}
          >
          </Image>
        </p>

        <p className="paragraph backdrop-blur-2xl ">
          <b>
            Different DAO Governance Models
          </b>
          <br />
          There are different DAO governance models, each with its own advantages and drawbacks. Some of
          the most common DAO governance models are:
          <table>
            <tr>
              <th>Governance Model</th>
              <th>Description</th>
            </tr>

            <tr>
              <th>
                Token-weighted voting
              </th>
              <td>
                This is a model where the DAO members vote on proposals using their
                tokens as voting power.
                <br />
                The more tokens a member has, the more influence they have on the
                outcome of the vote.
                <br />
                This model is simple and transparent, but it can also lead to centralization and
                plutocracy, where the wealthy members dominate the decision-making process.
              </td>
            </tr>

            <tr>
              <th>
                Delegated voting
              </th>
              <td>
                This is a model where the DAO members delegate their voting power to other
                members or representatives, who then vote on their behalf.
                <br />
                This model can reduce the burden and complexity of voting for the members,
                and allow them to choose experts or leaders who can
                represent their interests.
                <br />
                However, this model can also introduce trust and accountability issues,
                where the delegates may not act in the best interest of the members or the DAO.
              </td>
            </tr>
            <tr>
              <th>
                Liquid democracy
              </th>
              <td>
                This is a model that combines token-weighted voting and delegated voting, where
                the DAO members can either vote directly
                <br />
                using their tokens, or delegate their voting power to other
                members, who can further delegate it to others.
                <br />
                This model can offer more flexibility and granularity
                to the members, and allow them to switch between direct and representative voting as they wish.
                <br />
                However, this model can also be complex and confusing, and require more coordination and
                communication among the members.
              </td>
            </tr>

            <tr>
              <th>
                Quadratic voting:
              </th>
              <td>
                This is a model where the DAO members vote on proposals using their tokens, but
                the cost of voting increases quadratically with the number of votes.
                <br />
                This means that the more votes a member casts, the more tokens they have to spend.
                <br />
                This model can prevent the concentration of power and encourage the members to vote
                for their true preferences, rather than following the
                majority or the minority.
                <br />
                However, this model can also be expensive and inefficient, and discourage
                the members from participating in the voting process.
              </td>
            </tr>
          </table>
        </p>

        <p className="paragraph backdrop-blur-2xl ">
          <b>
            Pros and Cons of On-Chain and Off-Chain Governance
          </b>
          <br />
          Another way to classify DAO governance models is based on whether they are on-chain or off-chain.
          On-chain governance refers to the governance processes that happen directly on the blockchain,
          based on the rules specified in the smart contracts.
          <br />
          Off-chain governance refers to the governance processes that happen outside of the blockchain,
          <br />
          based on the social norms and conventions of the
          DAO community.
          <tr>
            <td>
              On-chain governance can be more transparent, secure, and immutable, as the decisions are recorded and executed on the blockchain, and can be verified by anyone. However, on-chain governance can
              also be more rigid, slow, and expensive, as the decisions require consensus and validation by the
              network, and may incur transaction fees or gas costs.
            </td>
            <td>
              Off-chain governance can be more flexible, fast, and cheap, as the decisions can be made and
              implemented by the DAO members without relying on the blockchain. However, off-chain governance can also be more opaque, vulnerable, and mutable, as the decisions are not recorded or enforced on the blockchain, and may be influenced by external factors or actors.
            </td>
          </tr>
        </p>
      </div>
    </div>
  )
}
