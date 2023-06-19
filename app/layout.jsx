import "@styles/globals.css";

export const metadata = {
   title: "Promtopia",
   description: "Promptopia Helps us to find out AI Prompt",
};

const RootLayout = ({ children }) => {
   return (
      <html lang="en">
         <body>
            <div className="main">
               <div className="gradient" />
            </div>
            <div className="app">{children}</div>
         </body>
      </html>
   );
};

export default RootLayout;
