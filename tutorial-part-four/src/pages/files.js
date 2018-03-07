import React from 'react';

export default ({ data }) => {
  return (
    <div>
      <h1>Site Files</h1>
      <table>
        <thead>
          <tr>
            <th>Relative Path</th>
            <th>Pretty Size</th>
            <th>Extension</th>
            <th>Date Created</th>
          </tr>
        </thead>
        <tbody>
          {data.allFile.edges.map(({ node }, index) => (
            <tr key={index}>
              <td>
                {node.relativePath}
              </td>
              <td>
                {node.prettySize}
              </td>
              <td>
                {node.extension}
              </td>
              <td>
                {node.birthTime}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export const query = graphql`
  query FilesQuery {
    allFile {
      edges {
        node {
          relativePath
          prettySize
          extension
          birthTime(fromNow: true)
        }
      }
    }
  }
`
