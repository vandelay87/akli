import { useStaticQuery, graphql } from 'gatsby'

const useWebsiteSettings = () => {
  const { contentfulWebsiteSettings } = useStaticQuery(graphql`
    query WebsiteSettingsQuery {
      contentfulWebsiteSettings {
        ...Header
        ...Footer
      }
    }
  `)

  return contentfulWebsiteSettings
}

export default useWebsiteSettings
