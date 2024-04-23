import React from 'react';
import Table from 'react-bootstrap/Table';
import Button from "react-bootstrap/Button";

const Aside = () => {
        return (
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>-Characters-</th>
                  <th>First Name</th>
                  <th>Last Name</th>
                  <th>Username</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>Thorfinn</td>
                  <td></td>
                  <td>@SonOfThor</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>Askeladd</td>
                  <td>Thornton</td>
                  <td>@TheKingSweyn</td>
                </tr>
                <tr>
                  <td>3</td>
                  <td colSpan={2}>Thorkell</td>
                  <td>@TheTallest</td>
                </tr>
              </tbody>
            </Table>
            
            
          );
}

export default Aside;
