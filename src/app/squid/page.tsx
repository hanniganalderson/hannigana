"use client";
import { useEffect, useState, useRef } from "react";
import Script from "next/script";
import Link from "next/link";
import { ArrowLeft, Users, Mic, TrendingUp, ArrowRight, Zap, Target, Star, Sparkles } from "lucide-react";

// Extend Window interface for D3
declare global {
  interface Window {
    d3: any;
  }
}

export default function SquidPage() {
  const [networkLoaded, setNetworkLoaded] = useState(false);
  const [d3Loaded, setD3Loaded] = useState(false);
  const canvasRef = useRef<HTMLDivElement>(null);
  const svgRef = useRef<SVGSVGElement | null>(null);
  const simulationRef = useRef<any>(null);

  // Handle D3 script loading
  useEffect(() => {
    const checkD3 = () => {
      if (window.d3) {
        setD3Loaded(true);
        return true;
      }
      return false;
    };

    // Check immediately
    if (checkD3()) return;

    // Poll for D3 to load
    const interval = setInterval(() => {
      if (checkD3()) {
        clearInterval(interval);
      }
    }, 100);

    // Cleanup after 10 seconds
    const timeout = setTimeout(() => {
      clearInterval(interval);
    }, 10000);

    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, []);

  // Initialize network when D3 is loaded and component is mounted
  useEffect(() => {
    if (!d3Loaded || !canvasRef.current) return;

    let isMounted = true;

    const initNetwork = () => {
      if (!window.d3 || !canvasRef.current || !isMounted) return;

      try {
        const container = canvasRef.current;
        const width = 1200;
        const height = 800;

        // Create SVG element using React ref
        const svg = window.d3.select(container)
          .append("svg")
          .attr("width", "100%")
          .attr("height", "800")
          .attr("viewBox", [0, 0, width, height])
          .attr("preserveAspectRatio", "xMidYMid meet");

        svgRef.current = svg.node();

        // Network data with comprehensive guest and member information
        const nodes = [
          // SquidTalk Hub
          { id: 'SquidTalk', group: 1, type: 'hub' },
          
          // SquidTalk Guests (with episode info)
          { id: 'Damien Law', group: 2, type: 'guest', episode: 'Episode #57', date: 'Aug 2025', title: 'How to start and sell a business in less than 3 years' },
          { id: 'Michael Suchy', group: 2, type: 'guest', episode: 'Episode #56', date: 'Aug 2025', title: '$75,000,000 in 3 years with solar' },
          { id: 'Jake Levy', group: 2, type: 'guest', episode: 'Episode #54', date: 'Jul 2025', title: 'How to start a multi-million dollar business in college' },
          { id: 'Luke Alexander', group: 2, type: 'guest', episode: 'Episode #55', date: 'Jul 2025', title: 'How To ACTUALLY Get Rich In Your 20s' },
          { id: 'Matthew Iommi', group: 2, type: 'guest', episode: 'Episode #53', date: 'Mar 2025', title: 'How this 28 year old makes $20,000,000 per year' },
          { id: 'Rhett Jones', group: 2, type: 'guest', episode: 'Episode #52', date: 'Mar 2025', title: 'He built a $3,000,000 bike park at 17' },
          { id: 'Aaron Spivak', group: 2, type: 'guest', episode: 'Episode #51', date: 'Feb 2025', title: 'How he built and sold a company for $48M in 48 months' },
          { id: 'Johnny Persón', group: 2, type: 'guest', episode: 'Episode #50', date: 'Feb 2025', title: 'How a drug addict became a multi millionaire entrepreneur' },
          { id: 'Matt Gronberg', group: 2, type: 'guest', episode: 'Episode #49', date: 'Dec 2024', title: 'He\'s 26 Years Old and Does $7,000,000/year' },
          { id: 'Ben Bader', group: 2, type: 'guest', episode: 'Episode #48', date: 'Dec 2024', title: 'How to Make MILLIONS Selling Courses' },
          { id: 'Jimmy Farley', group: 2, type: 'guest', episode: 'Episode #48', date: 'Dec 2024', title: 'How to Make MILLIONS Selling Courses' },
          { id: 'Cardinal Mason', group: 2, type: 'guest', episode: 'Episode #48', date: 'Dec 2024', title: 'How to Make MILLIONS Selling Courses' },
          { id: 'Cole Jaczko', group: 2, type: 'guest', episode: 'Episode #47', date: 'Nov 2024', title: 'Millionaire Ex-Banker: "This is how to ACTUALLY be happy and rich"' },
          { id: 'Jared Goetz', group: 2, type: 'guest', episode: 'Episode #46', date: 'Oct 2024', title: 'This Guy Made $200M Dropshipping' },
          { id: 'Dillon Latham', group: 2, type: 'guest', episode: 'Episode #45', date: 'Oct 2024', title: 'Dillon Latham Reveals EVERYTHING About His Crazy Life...' },
          { id: 'Jared Robinson', group: 2, type: 'guest', episode: 'Episode #44', date: 'Sep 2024', title: 'This Guy Scales Brands To The MILLIONS' },
          { id: 'Trent Kitsch', group: 2, type: 'guest', episode: 'Episode #43', date: 'Sep 2024', title: 'They Built A $630M Empire Selling Underwear' },
          { id: 'Ria Kitsch', group: 2, type: 'guest', episode: 'Episode #43', date: 'Sep 2024', title: 'They Built A $630M Empire Selling Underwear' },
          { id: 'Dean Johnson', group: 2, type: 'guest', episode: 'Episode #42', date: 'Oct 2024', title: 'This Guy Made MILLIONS On Snapchat' },
          { id: 'Brendan Ruh', group: 2, type: 'guest', episode: 'Episode #41', date: 'Oct 2024', title: 'How to Lifemaxx - Santa Cruz Medicinals' },
          { id: 'Joe De Sena', group: 2, type: 'guest', episode: 'Episode #40', date: 'Sep 2024', title: 'I Interviewed The Toughest CEO in America' },
          { id: 'Sage Bender', group: 2, type: 'guest', episode: 'Episode #39', date: 'Sep 2024', title: 'Become Hard To Kill In Your 20\'s' },
          { id: 'Baxate Carter', group: 2, type: 'guest', episode: 'Episode #38', date: 'Aug 2024', title: 'I Quit My 9-5 Then This Happened...' },
          { id: 'Ilya Fedorovich', group: 2, type: 'guest', episode: 'Episode #37', date: 'Aug 2024', title: 'How To Bet It All On Yourself, And Win' },
          { id: 'Shadi Bakour', group: 2, type: 'guest', episode: 'Episode #36', date: 'Aug 2024', title: 'From Uber Driver To $200M CEO Of Path Water' },
          { id: 'Luke Hopkins', group: 2, type: 'guest', episode: 'Episode #35', date: 'Aug 2024', title: 'How To Dominate In Your 20\'s' },
          { id: 'Noah Neiman', group: 2, type: 'guest', episode: 'Episode #34', date: 'Jul 2024', title: 'How He Built a $500 Million Boxing Brand' },
          { id: 'Blake Anderson', group: 2, type: 'guest', episode: 'Episode #33', date: 'Jul 2024', title: '23 Year Old Making Millions on the App Store' },
          { id: 'Avi Patel', group: 2, type: 'guest', episode: 'Episode #32', date: 'Jul 2024', title: 'The 20 Year Old Who Solved a $2 Trillion Dollar Problem' },
          { id: 'Joseph Abell', group: 2, type: 'guest', episode: 'Episode #31', date: 'Jul 2024', title: 'Homeless to MASSIVE Social Media Influencer' },
          { id: 'Frederik Feldt', group: 2, type: 'guest', episode: 'Episode #30', date: 'Jul 2024', title: 'The 21 Year Old Millionaire Selling Toy Monkeys' },
          { id: 'Yofray Ray', group: 2, type: 'guest', episode: 'Episode #29', date: 'Jun 2024', title: 'The REAL Origin of ImShmacked' },
          { id: 'Jeremy Kim', group: 2, type: 'guest', episode: 'Episode #28', date: 'Jun 2024', title: 'White Claw\'s Worst Nightmare: Nectar Hard Seltzers' },
          { id: 'Ian Fonz', group: 2, type: 'guest', episode: 'Episode #27', date: 'Jun 2024', title: 'How They Made Running Cool' },
          { id: 'Noah Rolette', group: 2, type: 'guest', episode: 'Episode #27', date: 'Jun 2024', title: 'How They Made Running Cool' },
          { id: 'Connor Sinann', group: 2, type: 'guest', episode: 'Episode #26', date: 'Jun 2024', title: 'The Fitness Industry\'s Darkest Secrets' },
          { id: 'Victor Guardiola', group: 2, type: 'guest', episode: 'Episode #25', date: 'Jun 2024', title: 'How To Start A Massive Company With No Resources' },
          { id: 'Jeremy Perkins', group: 2, type: 'guest', episode: 'Episode #24', date: 'May 2024', title: '$100m CEO Explains Why Most Businesses Fail' },
          { id: 'Michael Patellis', group: 2, type: 'guest', episode: 'Episode #23', date: 'May 2024', title: 'Blind Entrepreneur Sells Company For $52 Million' },
          { id: 'Chris Bates', group: 2, type: 'guest', episode: 'Episode #22', date: 'May 2024', title: 'Should Young Men Avoid Dating?' },
          { id: 'Sam Zia', group: 2, type: 'guest', episode: 'Episode #21', date: 'Apr 2024', title: 'Before Looksmaxxing: Sam Zia\'s Rapid Rise to Fame' },
          { id: 'Brian York', group: 2, type: 'guest', episode: 'Episode #20', date: 'Apr 2024', title: 'The Orphan who became Latin America\'s Next Jeff Bezos' },
          { id: 'Parker Godfrey', group: 2, type: 'guest', episode: 'Episode #19', date: 'Apr 2024', title: 'Construction Worker who Made Millions Selling Sunglasses' },
          { id: 'Seth Goldstein', group: 2, type: 'guest', episode: 'Episode #18', date: 'Apr 2024', title: 'He Made MILLIONS off of Chips?!' },
          { id: 'Harry Gestetner', group: 2, type: 'guest', episode: 'Episode #17', date: 'Mar 2024', title: 'How He Built and Sold Fanfix for $65 Million @ 21' },
          { id: 'Ryan Levy', group: 2, type: 'guest', episode: 'Episode #16', date: 'Mar 2024', title: 'How to ESCAPE YOUR 9-5 and MAKE MILLIONS' },
          { id: 'Jacob Peters', group: 2, type: 'guest', episode: 'Episode #15', date: 'Mar 2024', title: 'The Entrepreneur Changing the Health Industry Forever' },
          { id: 'Robert Oliver', group: 2, type: 'guest', episode: 'Episode #14', date: 'Feb 2024', title: '28 Year Old Sells Company For 30 Million Dollars' },
          { id: 'Tyler Riches', group: 2, type: 'guest', episode: 'Episode #13', date: 'Feb 2024', title: 'MONEY WON\'T MAKE YOU HAPPY' },
          { id: 'Alex Wolfe', group: 2, type: 'guest', episode: 'Episode #12', date: 'Feb 2024', title: 'PRIVATE JET PILOT turned MUSHROOM MILLIONAIRE' },
          { id: 'Ezra Frech', group: 2, type: 'guest', episode: 'Episode #11', date: 'Jan 2024', title: 'WORLD CHAMPION PARALYMPIAN @ 18' },
          { id: 'Remi Adeleke', group: 2, type: 'guest', episode: 'Episode #10', date: 'Jan 2024', title: 'DRUG DEALER turned NAVY SEAL?!' },
          { id: 'Grant Mitt', group: 2, type: 'guest', episode: 'Episode #8', date: 'Dec 2023', title: 'BROKE to 8-FIGURE CEO at 28' },
          { id: 'James Dumoulin', group: 2, type: 'guest', episode: 'Episode #7', date: 'Nov 2023', title: 'How He Built a Media Empire at 21' },
          { id: 'Kevin Kunze', group: 2, type: 'guest', episode: 'Episode #6', date: 'Oct 2023', title: 'WHY YOU ARE POOR' },
          { id: 'Kevin Pakman', group: 2, type: 'guest', episode: 'Episode #6', date: 'Oct 2023', title: 'WHY YOU ARE POOR' },
          { id: 'Jack Turco', group: 2, type: 'guest', episode: 'Episode #4', date: 'Oct 2023', title: 'He dropped out of college to eat raw meat' },
          { id: 'Marshall Crews', group: 2, type: 'guest', episode: 'Episode #3', date: 'Oct 2023', title: 'MARSHALL CREWS & JOEY FORSLUND' },
          { id: 'Joey Forslund', group: 2, type: 'guest', episode: 'Episode #3', date: 'Oct 2023', title: 'MARSHALL CREWS & JOEY FORSLUND' },
          
          // Outliers Members - Cohort I
          { id: 'Lukas Pakter', group: 4, type: 'member', cohort: 'I', role: 'Founder | Haus, Outliers' },
          { id: 'Victor Rijo', group: 4, type: 'member', cohort: 'I', role: 'Founder | PhraselyAI' },
          { id: 'Blake Anderson', group: 4, type: 'member', cohort: 'I', role: 'Founder | RizzGPT, UMax, CalAI' },
          { id: 'Parker Godfrey', group: 4, type: 'member', cohort: 'I', role: 'Founder | Kiaura, Keen' },
          { id: 'Nathanial Rosenblum', group: 4, type: 'member', cohort: 'I', role: 'Private Equity, Real Estate' },
          { id: 'Jeremy Kaminsky', group: 4, type: 'member', cohort: 'I', role: 'Ecom / Ads' },
          { id: 'Tyler Riches', group: 4, type: 'member', cohort: 'I', role: 'Trading / Crypto / Content' },
          { id: 'Troy Parrott', group: 4, type: 'member', cohort: 'I', role: 'Founder | Haus, Revyve' },
          { id: 'Marvin Attiq', group: 4, type: 'member', cohort: 'I', role: 'Ecom / Creative & Design Agency' },
          { id: 'Abby Roberge', group: 4, type: 'member', cohort: 'I', role: 'Founder & Comedian | Melrose Podcasts' },
          { id: 'Arnold Konopa', group: 4, type: 'member', cohort: 'I', role: 'Founder | HyperbaricWorld & Oxify' },
          { id: 'Ethan Williams', group: 4, type: 'member', cohort: 'I', role: 'Founder | Sire' },
          { id: 'Connor Swords', group: 4, type: 'member', cohort: 'I', role: 'Private Equity' },
          { id: 'Scott Holmes', group: 4, type: 'member', cohort: 'I', role: 'Ecommerce' },
          { id: 'Sage Bender', group: 4, type: 'member', cohort: 'I', role: 'BJJ / Creative Director / Creator' },
          { id: 'Ricky Del Valle', group: 4, type: 'member', cohort: 'I', role: 'Founder | Huracán Nero Auto Spa' },
          { id: 'Connor McLaren', group: 4, type: 'member', cohort: 'I', role: 'Founder | Quittr, Sweat Equity' },
          { id: 'Jarek Rozyskie', group: 4, type: 'member', cohort: 'I', role: 'Founder | Hitched Marketing' },
          { id: 'Gage Goodson', group: 4, type: 'member', cohort: 'I', role: 'Founder | OutYonder, Construction, FinTech' },
          { id: 'Trent Pezzano', group: 4, type: 'member', cohort: 'I', role: 'Founder | Denali Canning, Tundra Tribe' },
          { id: 'Ozzy Marriott', group: 4, type: 'member', cohort: 'I', role: 'Entrepreneur' },
          { id: 'Joseph Yonke', group: 4, type: 'member', cohort: 'I', role: 'Artist' },
          { id: 'Marius With', group: 4, type: 'member', cohort: 'I', role: 'Info / Law' },
          { id: 'Tahir Ahmed', group: 4, type: 'member', cohort: 'I', role: 'Ecom / CPG' },
          { id: 'Shalen Patel', group: 4, type: 'member', cohort: 'I', role: 'CPA / Business Owner' },
          { id: 'Dylan Harari', group: 4, type: 'member', cohort: 'I', role: 'CRO FanFix, TFM' },
          { id: 'Jake Levy', group: 4, type: 'member', cohort: 'I', role: 'Founder | Jacob Bar' },
          { id: 'Bryson Bowman', group: 4, type: 'member', cohort: 'I', role: 'Sales / Content / Info' },
          { id: 'Isaac Hetzroni', group: 4, type: 'member', cohort: 'I', role: 'Founder/Creator | ImprintGenius' },
          
          // Outliers Members - Cohort II
          { id: 'Ian Cahr', group: 4, type: 'member', cohort: 'II', role: 'Entrepreneur / Luxury Watches / FinTech' },
          { id: 'Mike Speciale', group: 4, type: 'member', cohort: 'II', role: 'Real Estate, Construction, Investor' },
          { id: 'Dean Johnson', group: 4, type: 'member', cohort: 'II', role: 'Founder | Fixated' },
          { id: 'Georges Mungaia', group: 4, type: 'member', cohort: 'II', role: 'Founder | HarmonyAI' },
          { id: 'Michael Suechy', group: 4, type: 'member', cohort: 'II', role: 'Founder | BrightSun Energy' },
          { id: 'Cade Carlisle', group: 4, type: 'member', cohort: 'II', role: 'Entrepreneur' },
          { id: 'Colin Knutson', group: 4, type: 'member', cohort: 'II', role: 'Founder | MetalBuildingsAmerica' },
          { id: 'Kent Depwe', group: 4, type: 'member', cohort: 'II', role: 'Head Hunter, Investor, Real Estate' },
          { id: 'Daavi Gazelle', group: 4, type: 'member', cohort: 'II', role: 'Entrepreneur / Creator' },
          { id: 'Dan Ragan', group: 4, type: 'member', cohort: 'II', role: 'Entrepreneur / Agency Owner' },
          { id: 'Nick Staley', group: 4, type: 'member', cohort: 'II', role: 'Real Estate' },
          { id: 'Jonathan Downing', group: 4, type: 'member', cohort: 'II', role: 'Founder/Cryptocurrency/Fintech' },
          { id: 'Luke Devins', group: 4, type: 'member', cohort: 'II', role: 'Founder | Devins Powerwash' },
          { id: 'Matthias Hacker', group: 4, type: 'member', cohort: 'II', role: 'Compliance & Advisory for Online Entrepreneurs and Cement Technology' },
          { id: 'Justin Kennedy', group: 4, type: 'member', cohort: 'II', role: 'Stock Market/Investing/Trader' },
          { id: 'Austin Sutor', group: 4, type: 'member', cohort: 'II', role: 'Ecom, Clothing, Marketing' },
          { id: 'Yashar Ghaffarloo', group: 4, type: 'member', cohort: 'II', role: 'Entrepreneur - Ecom / Cannabis / Coffee' },
          { id: 'Travis Jean', group: 4, type: 'member', cohort: 'II', role: 'Founder | EngravenCard' },
          { id: 'Isaiah Harmison', group: 4, type: 'member', cohort: 'II', role: 'Content / Crypto' },
          { id: 'Tiger Li', group: 4, type: 'member', cohort: 'II', role: 'Entrepreneur / Global Sourcing' },
          { id: 'Aidan Ranzieri', group: 4, type: 'member', cohort: 'II', role: 'Crypto/Alternative Investment Vehicles/Social Media' },
          { id: 'Hunter McVey', group: 4, type: 'member', cohort: 'II', role: 'Content' }
        ];

        const links = [
          // Connect all guests to SquidTalk hub
          ...nodes.filter(n => n.type === 'guest').map(n => ({ source: 'SquidTalk', target: n.id })),
          
          // Connect all members to SquidTalk hub
          ...nodes.filter(n => n.type === 'member').map(n => ({ source: 'SquidTalk', target: n.id })),
          
          // Connect overlapping guests who are also members
          { source: 'Blake Anderson', target: 'Blake Anderson' },
          { source: 'Parker Godfrey', target: 'Parker Godfrey' },
          { source: 'Tyler Riches', target: 'Tyler Riches' },
          { source: 'Sage Bender', target: 'Sage Bender' },
          { source: 'Connor McLaren', target: 'Connor McLaren' },
          { source: 'Dylan Harari', target: 'Dylan Harari' },
          { source: 'Jake Levy', target: 'Jake Levy' },
          { source: 'Dean Johnson', target: 'Dean Johnson' },
          { source: 'Michael Suechy', target: 'Michael Suechy' }
        ];

        // Create simulation
        const simulation = window.d3.forceSimulation(nodes)
          .force("link", window.d3.forceLink(links).id((d: any) => d.id).distance(250))
          .force("charge", window.d3.forceManyBody().strength(-800))
          .force("center", window.d3.forceCenter(width / 2, height / 2))
          .alpha(1)
          .alphaDecay(0.002);

        simulationRef.current = simulation;

        // Create links
        const link = svg.append("g")
          .attr("stroke", "#F5F5F5")
          .attr("stroke-opacity", 0.3)
          .selectAll("line")
          .data(links)
          .join("line")
          .attr("stroke-width", 1.5);

        // Create nodes with different shapes
        const nodeGroup = svg.append("g")
          .attr("stroke", "#F5F5F5")
          .attr("stroke-width", 2)
          .selectAll("g")
          .data(nodes)
          .join("g")
          .call(drag(simulation))
          .on("mouseover", function(event: any, d: any) {
            if (d.type === 'guest') {
              const tooltip = window.d3.select("body").append("div")
                .attr("class", "tooltip")
                .style("position", "absolute")
                .style("background", "rgba(0,0,0,0.9)")
                .style("color", "#F5F5F5")
                .style("padding", "12px")
                .style("border-radius", "8px")
                .style("font-size", "12px")
                .style("pointer-events", "none")
                .style("z-index", "1000")
                .style("border", "1px solid #C7A963")
                .style("max-width", "300px");
              
              tooltip.html(`
                <div style="font-weight: bold; margin-bottom: 8px;">${d.id}</div>
                <div style="color: #C7A963; margin-bottom: 4px;">${d.episode}</div>
                <div style="color: #F5F5F5/70; margin-bottom: 4px;">${d.date}</div>
                <div style="color: #F5F5F5/80; font-size: 11px;">${d.title}</div>
              `);
              
              tooltip.style("left", (event.pageX + 10) + "px")
                .style("top", (event.pageY - 10) + "px");
            } else if (d.type === 'member') {
              const tooltip = window.d3.select("body").append("div")
                .attr("class", "tooltip")
                .style("position", "absolute")
                .style("background", "rgba(0,0,0,0.9)")
                .style("color", "#F5F5F5")
                .style("padding", "12px")
                .style("border-radius", "8px")
                .style("font-size", "12px")
                .style("pointer-events", "none")
                .style("z-index", "1000")
                .style("border", "1px solid #C7A963")
                .style("max-width", "300px");
              
              tooltip.html(`
                <div style="font-weight: bold; margin-bottom: 8px;">${d.id}</div>
                <div style="color: #C7A963; margin-bottom: 4px;">Cohort ${d.cohort}</div>
                <div style="color: #F5F5F5/80; font-size: 11px;">${d.role}</div>
              `);
              
              tooltip.style("left", (event.pageX + 10) + "px")
                .style("top", (event.pageY - 10) + "px");
            }
          })
          .on("mouseout", function() {
            window.d3.selectAll(".tooltip").remove();
          })
          .on("click", function(event: any, d: any) {
            if (d.type === 'guest') {
              // Show detailed episode info in a modal or expand tooltip
              const detailedTooltip = window.d3.select("body").append("div")
                .attr("class", "detailed-tooltip")
                .style("position", "absolute")
                .style("background", "rgba(0,0,0,0.95)")
                .style("color", "#F5F5F5")
                .style("padding", "16px")
                .style("border-radius", "12px")
                .style("font-size", "13px")
                .style("z-index", "1001")
                .style("border", "2px solid #C7A963")
                .style("max-width", "350px")
                .style("box-shadow", "0 8px 32px rgba(0,0,0,0.5)");
              
              detailedTooltip.html(`
                <div style="font-weight: bold; font-size: 16px; margin-bottom: 12px; color: #C7A963;">${d.id}</div>
                <div style="color: #4A7C59; margin-bottom: 8px; font-weight: 500;">${d.episode}</div>
                <div style="color: #F5F5F5/70; margin-bottom: 8px;">${d.date}</div>
                <div style="color: #F5F5F5/90; font-size: 12px; line-height: 1.4; margin-bottom: 12px;">${d.title}</div>
                <div style="color: #F5F5F5/60; font-size: 11px;">Click outside to close</div>
              `);
              
              detailedTooltip.style("left", (event.pageX + 10) + "px")
                .style("top", (event.pageY - 10) + "px");
              
              // Remove detailed tooltip when clicking elsewhere
              window.d3.select("body").on("click.detailed-tooltip", function() {
                window.d3.selectAll(".detailed-tooltip").remove();
                window.d3.select("body").on("click.detailed-tooltip", null);
              });
            }
          });

        // Add different shapes based on group
        nodeGroup.each(function(this: any, d: any) {
          const g = window.d3.select(this);
          const size = d.group === 1 ? 50 : 25;
          
          if (d.group === 1) {
            // Hub - Large circle with gold color and black text
            g.append("circle")
              .attr("r", size)
              .attr("fill", "#C7A963")
              .attr("filter", "url(#glow)");
            g.append("circle")
              .attr("r", size * 0.7)
              .attr("fill", "none")
              .attr("stroke", "#F5F5F5")
              .attr("stroke-width", 3);
            g.append("circle")
              .attr("r", size * 0.4)
              .attr("fill", "none")
              .attr("stroke", "#000000")
              .attr("stroke-width", 1)
              .attr("stroke-dasharray", "2,2");
          } else {
            // All other nodes - Minimalist white and gold circles
            const colors: { [key: number]: string } = {
              2: "#FFFFFF", // SquidTalk Guests - White
              4: "#C7A963"  // Outliers Members - Gold
            };
            
            g.append("circle")
              .attr("r", size)
              .attr("fill", colors[d.group])
              .attr("stroke", colors[d.group] === "#FFFFFF" ? "#E5E5E5" : "#B8944F")
              .attr("stroke-width", 1);
          }
        });

        // Add glow filter for hub
        const defs = svg.append("defs");
        defs.append("filter")
          .attr("id", "glow")
          .append("feGaussianBlur")
          .attr("stdDeviation", "3")
          .attr("result", "coloredBlur");
        defs.select("#glow")
          .append("feMerge")
          .append("feMergeNode")
          .attr("in", "coloredBlur");
        defs.select("#glow")
          .append("feMerge")
          .append("feMergeNode")
          .attr("in", "SourceGraphic");

        // Add labels
        const label = svg.append("g")
          .selectAll("text")
          .data(nodes)
          .join("text")
          .text((d: any) => d.id)
          .attr("fill", (d: any) => {
            if (d.group === 1) return "#000000"; // Black text for gold hub
            if (d.group === 2) return "#000000"; // Black text for white nodes
            return "#000000"; // Black text for gold nodes
          })
          .attr("font-size", "11px")
          .attr("font-weight", "500")
          .attr("letter-spacing", "0.5px")
          .attr("text-anchor", "middle");

        // Animation loop
        simulation.on("tick", () => {
          if (!isMounted) return;

          // Add gentle floating motion
          nodes.forEach((node: any, index: number) => {
            node.vx += (Math.random() - 0.5) * 0.02;
            node.vy += (Math.random() - 0.5) * 0.02;
            
            // Add breathing effect for hot opportunities
            if (node.group === 2) {
              node.vx += Math.sin(Date.now() * 0.001 + index) * 0.015;
              node.vy += Math.cos(Date.now() * 0.001 + index) * 0.015;
            }
          });

          // Update positions
          link
            .attr("x1", (d: any) => d.source.x)
            .attr("y1", (d: any) => d.source.y)
            .attr("x2", (d: any) => d.target.x)
            .attr("y2", (d: any) => d.target.y);

          nodeGroup
            .attr("transform", (d: any) => `translate(${d.x},${d.y})`);

          label
            .attr("x", (d: any) => d.x)
            .attr("y", (d: any) => d.y);
        });

        function drag(simulation: any) {
          function dragstarted(event: any, d: any) {
            if (!event.active) simulation.alphaTarget(0.3).restart();
            d.fx = d.x;
            d.fy = d.y;
          }

          function dragged(event: any, d: any) {
            d.fx = event.x;
            d.fy = event.y;
          }

          function dragended(event: any, d: any) {
            if (!event.active) simulation.alphaTarget(0);
            d.fx = null;
            d.fy = null;
          }

          return window.d3.drag()
            .on("start", dragstarted)
            .on("drag", dragged)
            .on("end", dragended);
        }

        if (isMounted) {
          setNetworkLoaded(true);
        }

      } catch (error) {
        console.error('Error initializing network:', error);
        if (isMounted) {
          setNetworkLoaded(false);
        }
      }
    };

    // Initialize with a small delay to ensure DOM is ready
    const timeoutId = setTimeout(initNetwork, 100);

    return () => {
      isMounted = false;
      clearTimeout(timeoutId);
      
      // Clean up simulation
      if (simulationRef.current) {
        simulationRef.current.stop();
        simulationRef.current = null;
      }
      
      // Clean up SVG
      if (svgRef.current && svgRef.current.parentNode) {
        try {
          svgRef.current.parentNode.removeChild(svgRef.current);
        } catch (e) {
          console.log('SVG cleanup error:', e);
        }
        svgRef.current = null;
      }
    };
  }, [d3Loaded]);

  const pipelineOpportunities = [
    {
      name: "Jake Levy",
      role: "Jacob Bar",
      type: "Perfect Outliers Prospect",
      whyNow: "Scaling DTC channels and brand visibility through creator partnerships",
      action: "Invite to Outliers membership",
      priority: "high",
      momentum: "Preparing major DTC push and website rebrand"
    },
    {
      name: "Matthew Iommi",
      role: "Fetii",
      type: "Perfect Outliers Prospect",
      whyNow: "$7.35M seed funding led by Mark Cuban, operating in 68 cities",
      action: "Invite to Outliers membership",
      priority: "high",
      momentum: "Raised $7.35M seed funding in February 2025 with YC and Goodwater Capital"
    },
    {
      name: "Luke Alexander",
      role: "Closer Cartel",
      type: "Perfect Outliers Prospect",
      whyNow: "AI-driven sales training product launch, 72k IG following",
      action: "Invite to Outliers membership",
      priority: "high",
      momentum: "Launched AI-driven sales training product in Q2 2025"
    },
    {
      name: "Dillon Latham",
      role: "Simpletics",
      type: "Perfect Outliers Prospect",
      whyNow: "1.9M TikTok followers, viral content driving sales",
      action: "Invite to Outliers membership",
      priority: "high",
      momentum: "Founded Simpletics in 2024, leveraging viral content"
    },
    {
      name: "Jared Goetz",
      role: "Zendrop",
      type: "Perfect Outliers Prospect",
      whyNow: "Just completed StayTuned merger - perfect timing to join while scaling",
      action: "Invite to Outliers membership",
      priority: "high",
      momentum: "Announced strategic merger with StayTuned in June 2024"
    },
    {
      name: "Damien Law",
      role: "Effin' Good Snacks",
      type: "Perfect Outliers Prospect",
      whyNow: "Building a creator-first DTC strategy that aligns with SquidHaus' audience",
      action: "Invite to Outliers membership",
      priority: "medium",
      momentum: "Focused on scaling DTC via micro-influencers and content"
    },
    {
      name: "Dylan Harari",
      role: "FanFix",
      type: "Outliers → Podcast Pipeline",
      whyNow: "Co-CEO of FanFix, 15M+ users, $170M+ creator payouts",
      action: "Feature on SquidTalk episode",
      priority: "high",
      momentum: "Promoted to FanFix co-CEO after 100× revenue growth"
    },
    {
      name: "Blake Anderson",
      role: "RizzGPT/Umax",
      type: "Outliers → Podcast Pipeline",
      whyNow: "$500k/month, viral AI apps, 23-year-old bootstrap story",
      action: "Bring back on SquidTalk episode",
      priority: "high",
      momentum: "Built viral AI apps scaling to $80k MRR in one month"
    },
    {
      name: "Connor McLaren",
      role: "Quittr",
      type: "Outliers → Podcast Pipeline",
      whyNow: "$3k to $2M revenue in 10 months, sweat equity growth",
      action: "Feature on SquidTalk episode",
      priority: "medium",
      momentum: "Bootstrapped Quittr from $3k to $2M revenue in 10 months"
    },
    {
      name: "Abby Roberge",
      role: "Melrose Podcasts",
      type: "Outliers → Podcast Pipeline",
      whyNow: "28k IG, Austin comedy scene, high-energy entrepreneurship",
      action: "Feature on SquidTalk episode",
      priority: "medium",
      momentum: "Opened Melrose Podcasts studio in LA, relocated to Austin"
    },
    {
      name: "Tyler Riches",
      role: "TJR Trades",
      type: "Outliers → Podcast Pipeline",
      whyNow: "22-year-old trading prodigy, 8-figure success story",
      action: "Bring back on SquidTalk episode",
      priority: "medium",
      momentum: "Purportedly turned $0 to eight figures by 21"
    },
    {
      name: "Aaron Spivak",
      role: "Hush/Founders Club",
      type: "Network Expansion",
      whyNow: "200+ members paying $5k/year, access to high-earning founders",
      action: "Cross-community collaboration",
      priority: "medium",
      momentum: "The Founders Club grew to >200 members paying $5k per year"
    }
  ];

  return (
    <>
      <Script 
        src="https://d3js.org/d3.v7.min.js"
        strategy="beforeInteractive"
        onLoad={() => {
          if (window.d3) {
            setD3Loaded(true);
          }
        }}
      />
      
      <div className="min-h-screen bg-black text-[#F5F5F5]">
        {/* Stunning Hero Section */}
        <div className="relative overflow-hidden">
          {/* Animated Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900/20 to-black">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(199,169,99,0.1),transparent_50%)] animate-pulse"></div>
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_20%_80%,rgba(74,124,89,0.05),transparent_50%)]"></div>
            <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_80%_20%,rgba(183,110,121,0.05),transparent_50%)]"></div>
          </div>

          {/* Floating Elements */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-32 left-24 w-3 h-3 bg-[#C7A963] rounded-full animate-ping opacity-30"></div>
            <div className="absolute top-64 right-40 w-2 h-2 bg-[#4A7C59] rounded-full animate-pulse opacity-40"></div>
            <div className="absolute bottom-40 left-1/3 w-2.5 h-2.5 bg-[#B76E79] rounded-full animate-bounce opacity-35"></div>
            <div className="absolute top-1/2 right-1/4 w-1.5 h-1.5 bg-[#C7A963] rounded-full animate-ping opacity-25"></div>
            <div className="absolute top-1/3 left-1/2 w-2 h-2 bg-[#4A7C59] rounded-full animate-pulse opacity-30"></div>
            <div className="absolute bottom-1/3 right-1/3 w-1.5 h-1.5 bg-[#B76E79] rounded-full animate-bounce opacity-20"></div>
            <div className="absolute top-3/4 left-1/4 w-1 h-1 bg-[#C7A963] rounded-full animate-ping opacity-15"></div>
            <div className="absolute top-1/4 right-1/2 w-2.5 h-2.5 bg-[#4A7C59] rounded-full animate-pulse opacity-25"></div>
          </div>

          {/* Main Hero Content */}
          <div className="relative container mx-auto px-4 sm:px-8 py-24 md:py-48 lg:py-64">
            <div className="text-center max-w-6xl mx-auto">
              {/* Premium Badge */}
              <div className="inline-flex items-center gap-2 sm:gap-3 px-4 sm:px-6 py-2 sm:py-3 bg-black/20 backdrop-blur-md border border-[#C7A963]/20 rounded-full mb-8 sm:mb-16 hover-outline">
                <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 text-[#C7A963]" />
                <span className="text-xs sm:text-sm font-light tracking-widest text-[#C7A963] uppercase">Strategic Network Intelligence</span>
              </div>

              {/* Main Title */}
              <h1 className="text-3xl sm:text-5xl md:text-7xl font-['Playfair_Display'] font-bold tracking-tight text-[#F5F5F5] mb-8 sm:mb-12 leading-[0.9]">
                SquidTalk
                <span className="text-[#C7A963] mx-2 sm:mx-6">↔</span>
                Outliers
              </h1>

              {/* Elegant Divider */}
              <div className="w-32 h-px bg-gradient-to-r from-transparent via-[#C7A963] to-transparent mx-auto mb-20"></div>

              {/* Subtitle */}
              <p className="text-base sm:text-lg md:text-xl text-[#F5F5F5]/70 font-light tracking-wide max-w-4xl mx-auto mb-8 sm:mb-12 leading-relaxed">
                Strategic pipeline connecting podcast guests with the Outliers community
              </p>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-8 mb-12 sm:mb-16">
                <div className="text-center">
                  <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#C7A963] mb-2">57</div>
                  <div className="text-xs sm:text-sm text-[#F5F5F5]/60 font-light">Podcast Episodes</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#C7A963] mb-2">45</div>
                  <div className="text-xs sm:text-sm text-[#F5F5F5]/60 font-light">Outliers Members</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#C7A963] mb-2">12</div>
                  <div className="text-xs sm:text-sm text-[#F5F5F5]/60 font-light">Active Opportunities</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#C7A963] mb-2">8</div>
                  <div className="text-xs sm:text-sm text-[#F5F5F5]/60 font-light">Strategic Intros</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Interactive Network Visualization */}
        <div className="container mx-auto px-4 sm:px-8 mb-16 sm:mb-24">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-8 sm:mb-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-['Playfair_Display'] font-bold text-[#F5F5F5] mb-4 sm:mb-6">
                Network Intelligence
              </h2>
              <p className="text-sm sm:text-base text-[#F5F5F5]/70 font-light tracking-wide max-w-3xl mx-auto">
                Interactive visualization of SquidTalk guests and Outliers members
              </p>
            </div>

            {/* Network Map Container */}
            <div className="bg-gradient-to-br from-black via-gray-900/20 to-black border border-[#F5F5F5]/10 rounded-2xl sm:rounded-3xl p-4 sm:p-8 md:p-16 shadow-2xl overflow-hidden">
              <div 
                ref={canvasRef}
                className="w-full h-[400px] sm:h-[500px] md:h-[600px] lg:h-[700px] xl:h-[800px]"
                style={{ minHeight: '400px' }}
              ></div>
              
              {/* Legend moved here */}
              <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-16 text-xs sm:text-sm text-[#F5F5F5]/60 font-light tracking-wide mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-[#F5F5F5]/10">
                <div className="flex items-center justify-center sm:justify-start gap-3 sm:gap-4">
                  <div className="w-2 h-2 sm:w-3 sm:h-3 bg-white rounded-full border border-[#F5F5F5]/30"></div>
                  <span>SquidTalk Guests</span>
                </div>
                <div className="flex items-center justify-center sm:justify-start gap-3 sm:gap-4">
                  <div className="w-2 h-2 sm:w-3 sm:h-3 bg-[#C7A963] rounded-full border border-[#F5F5F5]/30"></div>
                  <span>Outliers Members</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Strategic Introductions for Outliers Flywheel */}
        <div className="container mx-auto px-8 mb-24">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-['Playfair_Display'] font-bold text-[#F5F5F5] mb-6">
                Strategic Introductions for Outliers Flywheel
              </h2>
              <p className="text-lg text-[#F5F5F5]/70 font-light tracking-wide max-w-3xl mx-auto">
                Curated high-ROI connections between podcast guests and Outliers members
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Introduction 1 */}
              <div className="bg-black/20 backdrop-blur-md border border-[#F5F5F5]/10 rounded-2xl p-8 hover-outline">
                <div className="flex items-center gap-4 mb-6">
                  <Users className="w-6 h-6 text-[#C7A963]" />
                  <h3 className="text-xl font-semibold text-[#F5F5F5]">Dylan Harari ↔ Dillon Latham</h3>
                </div>
                <div className="space-y-4 text-sm">
                  <div>
                    <span className="font-semibold text-[#C7A963]">Connection:</span>
                    <p className="text-[#F5F5F5]/80 mt-1">Dylan scaled FanFix to $170M+ creator payouts; Dillon has 1.9M TikTok followers building grooming brand</p>
                  </div>
                  <div>
                    <span className="font-semibold text-[#C7A963]">Value:</span>
                    <p className="text-[#F5F5F5]/80 mt-1">Dillon monetizes audience through FanFix platform; Dylan gets high-profile creator case study</p>
                  </div>
                </div>
              </div>

              {/* Introduction 2 */}
              <div className="bg-black/20 backdrop-blur-md border border-[#F5F5F5]/10 rounded-2xl p-8 hover-outline">
                <div className="flex items-center gap-4 mb-6">
                  <Users className="w-6 h-6 text-[#C7A963]" />
                  <h3 className="text-xl font-semibold text-[#F5F5F5]">Matthew Iommi ↔ Parker Godfrey</h3>
                </div>
                <div className="space-y-4 text-sm">
                  <div>
                    <span className="font-semibold text-[#C7A963]">Connection:</span>
                    <p className="text-[#F5F5F5]/80 mt-1">Matthew scaled logistics business with $7M+ VC backing; Parker scaling lifestyle eyewear brand</p>
                  </div>
                  <div>
                    <span className="font-semibold text-[#C7A963]">Value:</span>
                    <p className="text-[#F5F5F5]/80 mt-1">Parker gets scaling shortcuts; Matthew gains CPG connections; Lukas bridges tech/CPG credibility</p>
                  </div>
                </div>
              </div>

              {/* Introduction 3 */}
              <div className="bg-black/20 backdrop-blur-md border border-[#F5F5F5]/10 rounded-2xl p-8 hover-outline">
                <div className="flex items-center gap-4 mb-6">
                  <Users className="w-6 h-6 text-[#C7A963]" />
                  <h3 className="text-xl font-semibold text-[#F5F5F5]">Jake Levy ↔ Victor Guardiola</h3>
                </div>
                <div className="space-y-4 text-sm">
                  <div>
                    <span className="font-semibold text-[#C7A963]">Connection:</span>
                    <p className="text-[#F5F5F5]/80 mt-1">Both health-conscious CPG founders; Victor ahead in retail distribution and wholesale</p>
                  </div>
                  <div>
                    <span className="font-semibold text-[#C7A963]">Value:</span>
                    <p className="text-[#F5F5F5]/80 mt-1">Jake learns manufacturing strategies; Victor gains exposure through Jake's creator network</p>
                  </div>
                </div>
              </div>

              {/* Introduction 4 */}
              <div className="bg-black/20 backdrop-blur-md border border-[#F5F5F5]/10 rounded-2xl p-8 hover-outline">
                <div className="flex items-center gap-4 mb-6">
                  <Users className="w-6 h-6 text-[#C7A963]" />
                  <h3 className="text-xl font-semibold text-[#F5F5F5]">Tyler Riches ↔ Jeremy Kaminsky</h3>
                </div>
                <div className="space-y-4 text-sm">
                  <div>
                    <span className="font-semibold text-[#C7A963]">Connection:</span>
                    <p className="text-[#F5F5F5]/80 mt-1">Tyler has trading audience primed for optimization; Jeremy specializes in performance marketing</p>
                  </div>
                  <div>
                    <span className="font-semibold text-[#C7A963]">Value:</span>
                    <p className="text-[#F5F5F5]/80 mt-1">Jeremy increases Tyler's course revenue; Tyler provides high-value client for Jeremy</p>
                  </div>
                </div>
              </div>

              {/* Introduction 5 */}
              <div className="bg-black/20 backdrop-blur-md border border-[#F5F5F5]/10 rounded-2xl p-8 hover-outline">
                <div className="flex items-center gap-4 mb-6">
                  <Users className="w-6 h-6 text-[#C7A963]" />
                  <h3 className="text-xl font-semibold text-[#F5F5F5]">Aaron Spivak ↔ Abby Roberge</h3>
                </div>
                <div className="space-y-4 text-sm">
                  <div>
                    <span className="font-semibold text-[#C7A963]">Connection:</span>
                    <p className="text-[#F5F5F5]/80 mt-1">Aaron's Founders Club thrives on intimate content; Abby runs Melrose Podcasts and entertainment</p>
                  </div>
                  <div>
                    <span className="font-semibold text-[#C7A963]">Value:</span>
                    <p className="text-[#F5F5F5]/80 mt-1">Abby creates unique networking experiences; Aaron gives access to 6-7 figure founder network</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Flywheel Summary */}
            <div className="mt-12 text-center">
              <div className="bg-black/30 backdrop-blur-md border border-[#F5F5F5]/10 rounded-2xl p-8 max-w-4xl mx-auto">
                <h3 className="text-xl font-semibold text-[#F5F5F5] mb-4">The Outliers Flywheel Effect</h3>
                <p className="text-[#F5F5F5]/80 leading-relaxed">
                  These introductions create a simple cycle: great connections lead to better podcast content, 
                  which attracts higher-caliber members, who bring even better connections.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Pipeline Opportunity Cards */}
        <div className="container mx-auto px-8 py-32">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-['Playfair_Display'] font-bold text-[#F5F5F5] mb-6">Pipeline Opportunities</h2>
            <div className="w-24 h-px bg-gradient-to-r from-transparent via-[#C7A963] to-transparent mx-auto"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {pipelineOpportunities.map((opp, index) => (
              <div 
                key={index}
                className={`group bg-black/20 backdrop-blur-md border border-[#F5F5F5]/10 rounded-xl p-6 hover:border-[#C7A963]/30 transition-all duration-500 hover:scale-105 hover-outline ${
                  opp.priority === 'high' ? 'ring-1 ring-[#C7A963]/20' : ''
                }`}
              >
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <h3 className="text-lg font-['Playfair_Display'] font-bold text-[#F5F5F5] mb-2">{opp.name}</h3>
                    <p className="text-[#F5F5F5]/60 text-xs mb-3 font-light tracking-wide">{opp.role}</p>
                    <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-light tracking-wide ${
                      opp.type.includes('Perfect') ? 'bg-[#4A7C59]/20 text-[#4A7C59] border border-[#4A7C59]/30' :
                      opp.type.includes('Pipeline') ? 'bg-[#B76E79]/20 text-[#B76E79] border border-[#B76E79]/30' :
                      'bg-[#C7A963]/20 text-[#C7A963] border border-[#C7A963]/30'
                    }`}>
                      {opp.type}
                    </div>
                  </div>
                  <div className={`w-2 h-2 rounded-full ${
                    opp.priority === 'high' ? 'bg-[#C7A963]' : 'bg-[#B76E79]'
                  }`}></div>
                </div>
                
                <div className="space-y-4">
                  <div>
                    <p className="text-xs text-[#F5F5F5]/50 uppercase tracking-widest font-medium mb-2">Why Now?</p>
                    <p className="text-xs text-[#F5F5F5]/80 leading-relaxed font-light tracking-wide">{opp.whyNow}</p>
                  </div>
                  
                  <div>
                    <p className="text-xs text-[#F5F5F5]/50 uppercase tracking-widest font-medium mb-2">Recommended Action</p>
                    <p className="text-xs text-[#C7A963] font-medium leading-relaxed tracking-wide">{opp.action}</p>
                  </div>
                  
                  <div>
                    <p className="text-xs text-[#F5F5F5]/50 uppercase tracking-widest font-medium mb-2">Momentum</p>
                    <p className="text-xs text-[#F5F5F5]/60 leading-relaxed font-light tracking-wide">{opp.momentum}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="container mx-auto px-8 py-20">
          <div className="text-center text-[#F5F5F5]/50">
            <p className="text-sm font-light tracking-wide">
              SquidTalk ↔ Outliers Pipeline • Updated weekly • 
              <span className="text-[#C7A963] ml-2 font-medium">12 active opportunities</span>
            </p>
          </div>
        </div>
      </div>

      <style jsx>{`
        .hover-outline {
          position: relative;
          overflow: hidden;
        }
        
        .hover-outline::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          border: 1px solid transparent;
          border-radius: inherit;
          background: linear-gradient(45deg, #C7A963, #4A7C59, #B76E79, #C7A963);
          background-size: 400% 400%;
          opacity: 0;
          transition: opacity 0.3s ease;
          z-index: -1;
        }
        
        .hover-outline:hover::before {
          opacity: 0.3;
          animation: borderGlow 2s ease-in-out infinite;
        }
        
        @keyframes borderGlow {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }
      `}</style>
    </>
  );
} 