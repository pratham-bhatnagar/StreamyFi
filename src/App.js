import Nav from "./components/Nav";
import "@rainbow-me/rainbowkit/styles.css";
import {
  getDefaultWallets,
  RainbowKitProvider,
  darkTheme,
} from "@rainbow-me/rainbowkit";
import { chain, configureChains, createClient, WagmiConfig } from "wagmi";
import { alchemyProvider } from "wagmi/providers/alchemy";
import { publicProvider } from "wagmi/providers/public";
import {  Router, Route, Link } from "wouter";
import Home from "./pages/Home";
import Streams from "./pages/Streams";
import Incoming from "./pages/Incoming";
import Outgoing from "./pages/Outgoing";
import AddService from "./pages/AddService";
import Landing from "./pages/Landing";

const { chains, provider } = configureChains(
  [chain.mainnet, chain.polygon, chain.optimism, chain.arbitrum],
  [alchemyProvider({ alchemyId: process.env.ALCHEMY_ID }), publicProvider()]
);

const { connectors } = getDefaultWallets({
  appName: "My RainbowKit App",
  chains,
});

const wagmiClient = createClient({
  autoConnect: true,
  connectors,
  provider,
});

export default function App() {
  return (
    <WagmiConfig client={wagmiClient}>
      <RainbowKitProvider coolMode chains={chains}>
        <Nav />
        <Router>
          <Route path="/home" component={Home} />
          <Route path="/incoming" component={Incoming} />
          <Route path="/outgoing" component={Outgoing} />
          <Route path="/streams" component={Streams} />
          <Route path="/add-service" component={AddService} />
          <Route path="/" component={Landing} />
        </Router>
      </RainbowKitProvider>
    </WagmiConfig>
  );
}
