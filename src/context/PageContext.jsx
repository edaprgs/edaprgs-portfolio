import { createContext, useContext, useState } from "react"

const PageContext = createContext(null)

export function PageProvider({ children }) {
  const [page, setPage] = useState("home")

  const switchPage = (id) => {
    setPage(id)
    document.querySelector(".right-panel")?.scrollTo({ top: 0, behavior: "instant" })
    window.scrollTo({ top: 0, behavior: "instant" })
  }

  return (
    <PageContext.Provider value={{ page, setPage: switchPage }}>
      {children}
    </PageContext.Provider>
  )
}

export const usePage = () => useContext(PageContext)
