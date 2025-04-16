import styled from 'styled-components'

export const FooterWrapper = styled.footer`
  background-color:#003366;
  color: white;
  padding: 40px 150px;
  font-family: Arial, sans-serif;
  @media (max-width: 768px) {
    padding: 40px 20px;
  }
  
`

export const FooterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 20px;
`

export const Column = styled.div`
  flex: 1;
  min-width: 150px;
  padding-left: 30px;

  h3 {
    margin-bottom: 20px;
    font-size: 20px;
    font-weight: bold;
  }

  a {
  display: block; 
    margin: 8px 0;
    font-size: 15px;
    color: white;
    text-decoration: none;
  }

  a:hover {
    text-decoration: underline;
  }

  .icon {
    margin-right: 8px;
  }
`

export const LeftColumn = styled.div`
  

flex: 1;
  min-width: 150px;
  padding-left: 30px;

  h3 {
    margin-bottom: 20px;
    font-size: 20px;
    font-weight: bold;
  }

  p, a {
    margin: 8px 0;
    font-size: 15px;
    color: white;
    text-decoration: none;
  }

  a:hover {
    text-decoration: underline;
  }

  .icon {
    margin-right: 8px;
  }
  @media (max-width: 768px) {
    padding-left: 0;
  }
`

export const MapContainer = styled.div`
  flex: 1.5;
  min-width: 300px;

  iframe {
    width: 100%;
    height: 250px;
    border: none;
  }

  @media (max-width: 768px) {
    flex: 1;
    width: 100%;
    margin-top: 20px;
  }
    `

export const FooterBottom = styled.div`
  margin-top: 30px;
  font-size: 13px;
  color: #eee;
  line-height: 1.6;
  font-size: 18px
  
`