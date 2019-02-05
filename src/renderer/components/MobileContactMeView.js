import React from 'react'
import { Container, Button, Form, Menu, Image } from 'semantic-ui-react'

const ContactPreview = (props) => {
  const { appDetails } = props;
  const styles = {
    homePageButton: {
      backgroundColor: appDetails.ContactScreenSubmitButtonBackgroundColor || 'rgba(250,249,249,0.3)',
      marginTop: 15,
      marginBottom: 15
    },
    homePageHeader: {
      fontSize: 35,
      textAlign: 'center',
      margin: 0,
      color: '#FFFFFF',
      width: 'auto',
      overflowWrap: 'break-word'
    },
    container: {
      flex: 1,
      color: '#fff',
      backgroundColor: appDetails.ContactScreenBackgroundColor || '#000000',
      alignItems: 'center',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      height: '100%'
    }
  };
  return (
    <Container style={styles.container}>

      <Menu
        secondary
        style={{ color: '#132029', backgroundColor: 'rgba(250,249,249,0.8)' }}
      >
        <Menu.Item position='left' icon='sidebar' />
        <Menu.Item style={{ maxWidth: '20ch', overflowWrap: 'break-word' }}>{appDetails.ContactScreenHeaderText || 'Header Text'}</Menu.Item>
        <Menu.Item position='right' icon='home' />
      </Menu>

      <Container style={{ textAlign: 'center', height: '90%', overflowY: 'auto' }}>
        <Container style={{ display: 'flex', justifyContent: 'center' }}>
          <Image
            style={{ height: 60, width: 60, margin: 5 }}
            src='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/PjwhRE9DVFlQRSBzdmcgIFBVQkxJQyAnLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4nICAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkJz48c3ZnIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDQ4IDQ4IiBpZD0iTGF5ZXJfMSIgdmVyc2lvbj0iMS4xIiB2aWV3Qm94PSIwIDAgNDggNDgiIHhtbDpzcGFjZT0icHJlc2VydmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPjxjaXJjbGUgY3g9IjI0IiBjeT0iMjQiIGZpbGw9IiMxQ0I3RUIiIHI9IjI0Ii8+PGc+PGc+PHBhdGggZD0iTTM2LjgsMTUuNGMtMC45LDAuNS0yLDAuOC0zLDAuOWMxLjEtMC43LDEuOS0xLjgsMi4zLTMuMWMtMSwwLjYtMi4xLDEuMS0zLjQsMS40Yy0xLTEuMS0yLjMtMS44LTMuOC0xLjggICAgYy0yLjksMC01LjMsMi41LTUuMyw1LjdjMCwwLjQsMCwwLjksMC4xLDEuM2MtNC40LTAuMi04LjMtMi41LTEwLjktNS45Yy0wLjUsMC44LTAuNywxLjgtMC43LDIuOWMwLDIsMC45LDMuNywyLjMsNC43ICAgIGMtMC45LDAtMS43LTAuMy0yLjQtMC43YzAsMCwwLDAuMSwwLDAuMWMwLDIuNywxLjgsNSw0LjIsNS42Yy0wLjQsMC4xLTAuOSwwLjItMS40LDAuMmMtMC4zLDAtMC43LDAtMS0wLjEgICAgYzAuNywyLjMsMi42LDMuOSw0LjksMy45Yy0xLjgsMS41LTQuMSwyLjQtNi41LDIuNGMtMC40LDAtMC44LDAtMS4zLTAuMWMyLjMsMS42LDUuMSwyLjYsOC4xLDIuNmM5LjcsMCwxNS04LjYsMTUtMTYuMSAgICBjMC0wLjIsMC0wLjUsMC0wLjdDMzUuMiwxNy42LDM2LjEsMTYuNiwzNi44LDE1LjR6IiBmaWxsPSIjRkZGRkZGIi8+PC9nPjwvZz48L3N2Zz4='
          />

          <Image
            style={{ height: 60, width: 60, margin: 5 }}
            src='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/PjwhRE9DVFlQRSBzdmcgIFBVQkxJQyAnLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4nICAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkJz48c3ZnIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDEyOCAxMjgiIGhlaWdodD0iMTI4cHgiIGlkPSJMYXllcl8xIiB2ZXJzaW9uPSIxLjEiIHZpZXdCb3g9IjAgMCAxMjggMTI4IiB3aWR0aD0iMTI4cHgiIHhtbDpzcGFjZT0icHJlc2VydmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPjxnPjxsaW5lYXJHcmFkaWVudCBncmFkaWVudFRyYW5zZm9ybT0ibWF0cml4KDEgMCAwIC0xIDU5NCA2MzMpIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgaWQ9IlNWR0lEXzFfIiB4MT0iLTU2Ni43MTE0IiB4Mj0iLTQ5My4yODc1IiB5MT0iNTE2LjU2OTMiIHkyPSI2MjEuNDI5NiI+PHN0b3Agb2Zmc2V0PSIwIiBzdHlsZT0ic3RvcC1jb2xvcjojRkZCOTAwIi8+PHN0b3Agb2Zmc2V0PSIxIiBzdHlsZT0ic3RvcC1jb2xvcjojOTEwMEVCIi8+PC9saW5lYXJHcmFkaWVudD48Y2lyY2xlIGN4PSI2NCIgY3k9IjY0IiBmaWxsPSJ1cmwoI1NWR0lEXzFfKSIgcj0iNjQiLz48L2c+PGc+PGc+PHBhdGggZD0iTTgyLjMzMywxMDRINDUuNjY3QzMzLjcyLDEwNCwyNCw5NC4yODEsMjQsODIuMzMzVjQ1LjY2N0MyNCwzMy43MTksMzMuNzIsMjQsNDUuNjY3LDI0aDM2LjY2NiAgICBDOTQuMjgxLDI0LDEwNCwzMy43MTksMTA0LDQ1LjY2N3YzNi42NjdDMTA0LDk0LjI4MSw5NC4yODEsMTA0LDgyLjMzMywxMDR6IE00NS42NjcsMzAuNjY3Yy04LjI3MSwwLTE1LDYuNzI5LTE1LDE1djM2LjY2NyAgICBjMCw4LjI3MSw2LjcyOSwxNSwxNSwxNWgzNi42NjZjOC4yNzEsMCwxNS02LjcyOSwxNS0xNVY0NS42NjdjMC04LjI3MS02LjcyOS0xNS0xNS0xNUg0NS42Njd6IiBmaWxsPSIjRkZGRkZGIi8+PC9nPjxnPjxwYXRoIGQ9Ik02NCw4NGMtMTEuMDI4LDAtMjAtOC45NzMtMjAtMjBjMC0xMS4wMjksOC45NzItMjAsMjAtMjBzMjAsOC45NzEsMjAsMjBDODQsNzUuMDI3LDc1LjAyOCw4NCw2NCw4NHogICAgIE02NCw1MC42NjdjLTcuMzUyLDAtMTMuMzMzLDUuOTgxLTEzLjMzMywxMy4zMzNjMCw3LjM1Myw1Ljk4MSwxMy4zMzMsMTMuMzMzLDEzLjMzM1M3Ny4zMzMsNzEuMzUzLDc3LjMzMyw2NCAgICBDNzcuMzMzLDU2LjY0OCw3MS4zNTMsNTAuNjY3LDY0LDUwLjY2N3oiIGZpbGw9IiNGRkZGRkYiLz48L2c+PGc+PGNpcmNsZSBjeD0iODUuMjUiIGN5PSI0Mi43NSIgZmlsbD0iI0ZGRkZGRiIgcj0iNC41ODMiLz48L2c+PC9nPjwvc3ZnPg=='
          />

          <Image
            style={{ height: 60, width: 60, margin: 5 }}
            src='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/PjxzdmcgaGVpZ2h0PSI1MDAiIGlkPSJzdmcyIiB2ZXJzaW9uPSIxLjEiIHdpZHRoPSI1MDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6Y2M9Imh0dHA6Ly9jcmVhdGl2ZWNvbW1vbnMub3JnL25zIyIgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIiB4bWxuczppbmtzY2FwZT0iaHR0cDovL3d3dy5pbmtzY2FwZS5vcmcvbmFtZXNwYWNlcy9pbmtzY2FwZSIgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIiB4bWxuczpzb2RpcG9kaT0iaHR0cDovL3NvZGlwb2RpLnNvdXJjZWZvcmdlLm5ldC9EVEQvc29kaXBvZGktMC5kdGQiIHhtbG5zOnN2Zz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxkZWZzIGlkPSJkZWZzNCIvPjxnIGlkPSJsYXllcjEiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAsLTU1Mi4zNjIxOCkiPjxyZWN0IGhlaWdodD0iNTAwIiBpZD0icmVjdDM3NTgtMSIgcng9IjI1MCIgcnk9IjI1MCIgc3R5bGU9ImZpbGw6IzQ1NjE5ZDtmaWxsLW9wYWNpdHk6MTtzdHJva2U6bm9uZSIgd2lkdGg9IjUwMCIgeD0iMCIgeT0iNTUyLjM2MjE4Ii8+PHBhdGggZD0iTSAyODkuNjg3NSA2MCBDIDIyMS45MDMxNyA2MCAxOTkuNTMxMjUgOTEuMTAwNTcgMTk5LjUzMTI1IDE0NC40Mzc1IEwgMTk5LjUzMTI1IDE4Ni42NTYyNSBMIDE1NSAxODYuNjU2MjUgTCAxNTUgMjUwLjAzMTI1IEwgMTk5LjUzMTI1IDI1MC4wMzEyNSBMIDE5OS41MzEyNSA0NDAgTCAyODEuNjU2MjUgNDQwIEwgMjgxLjY1NjI1IDI1MC4wMzEyNSBMIDMzNy40Njg3NSAyNTAuMDMxMjUgTCAzNDQuOTY4NzUgMTg2LjY1NjI1IEwgMjgxLjY1NjI1IDE4Ni42NTYyNSBMIDI4MS42NTYyNSAxNDkgQyAyODEuNjU2MjUgMTMxLjk3OTY2IDI4NS4zOTE0OCAxMjMuMzQzNzUgMzExLjgxMjUgMTIzLjM0Mzc1IEwgMzQ0Ljk2ODc1IDEyMy4zNDM3NSBMIDM0NC45Njg3NSA2MCBMIDI4OS42ODc1IDYwIHogIiBpZD0icmVjdDI5ODktMSIgc3R5bGU9ImZpbGw6I2ZmZmZmZjtmaWxsLW9wYWNpdHk6MTtzdHJva2U6bm9uZSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMCw1NTIuMzYyMTgpIi8+PC9nPjwvc3ZnPg=='
          />
        </Container>
        <p style={styles.homePageHeader}>{/*ContactScreenMainText*/}{appDetails.ContactScreenMainText || 'Contact Me!'}{/*ContactScreenMainText*/}</p>
        <Form style={{ marginLeft: 30, marginRight: 30 }}>
          <Form.Field>
            <label style={{ textAlign: 'left', color: 'grey' }}>Name</label>
            <input />
          </Form.Field>
          <Form.Field>
            <label style={{ textAlign: 'left', color: 'grey' }}>Email</label>
            <input />
          </Form.Field>
          <Form.Field>
            <label style={{ textAlign: 'left', color: 'grey', overflowWrap: 'break-word' }} >{appDetails.FormMessageText || "What's up?"}</label>
            <input />
          </Form.Field>
        </Form>
        <Button
          content='Submit'
          inverted
          style={styles.homePageButton}
        />
      </Container>



    </Container>

  )
}



export default ContactPreview
