import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { showUsers } from "../../redux/actions/UiActions";
import { connect } from "react-redux";
import ReactTable from "react-table";
import PageTitle from "../../components/common/PageTitle";
import getGroupsData from "../../data/users-data";
import {
  Container,
  Row,
  Col,
  ButtonGroup,
  Button,
  Card,
  CardHeader,
  CardBody,
  FormSelect,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  FormInput
} from "shards-react";

const UserListPage = () => {
  const { t, i18n } = useTranslation();
  let history = useHistory();
  const [data, setData] = useState(getGroupsData());
  const [pageSize, setPageSize] = useState(5);
  const [pageSizeOptions, setPageSizeOptions] = useState([
    5,
    10,
    15,
    20,
    25,
    30
  ]);
  const tableColumns = [
    {
      Header: "#",
      accessor: "id",
      maxWidth: 60,
      className: "text-center"
    },
    {
      Header: "UID",
      accessor: "uid",
      className: "text-center",
      minWidth: 100
    },
    {
      Header: "Display Name",
      accessor: "displayName",
      className: "text-center",
      minWidth: 100
    },
    {
      Header: "First Name",
      accessor: "firstName",
      className: "text-center",
      minWidth: 100
    },
    {
      Header: "Email",
      accessor: "email",
      className: "text-center",
      minWidth: 200
    },
    {
      Header: "Size",
      accessor: "size",
      maxWidth: 50,
      className: "text-center"
    },
    {
      Header: "Status",
      accessor: "status",
      maxWidth: 100,
      Cell: row => (
        <span className={getStatusClass(row.original.status)}>
          {row.original.status}
        </span>
      ),
      className: "text-center"
    },
    {
      Header: "Actions",
      accessor: "actions",
      maxWidth: 150,
      minWidth: 100,
      sortable: false,
      Cell: row => (
        <ButtonGroup size="sm" className="d-table mx-auto">
          <Button theme="white" onClick={() => handleItemViewDetails(row)}>
            <i className="material-icons">&#xE870;</i>
          </Button>
          <Button theme="white" onClick={() => handleItemEdit(row)}>
            <i className="material-icons" style={{ color: "green" }}>
              &#xE254;
            </i>
          </Button>
          <Button theme="white" onClick={() => handleItemDelete(row)}>
            <i className="material-icons" style={{ color: "red" }}>
              &#xE872;
            </i>
          </Button>
        </ButtonGroup>
      )
    }
  ];
  function getStatusClass(status) {
    const statusMap = {
      InActive: "danger",
      Active: "success"
    };
    return `text-${statusMap[status]}`;
  }
  function handlePageSizeChange(e) {
    this.setState({
      ...this.state,
      pageSize: e.target.value
    });
  }
  function handleFilterSearch(e) {
    this.setState({
      ...this.state,
      tableData: this.searcher.search(e.target.value)
    });
  }
  function handleGoToUserAddPage() {
    return history.push("/user_add");
  }
  function handleItemEdit(row) {
    alert(`Editing group "${row.original.id}"!`);
  }
  function handleItemDelete(row) {
    alert(`Deleting group "${row.original.id}"!`);
  }
  function handleItemViewDetails(row) {
    alert(`Viewing details for "${row.original.id}"!`);
  }
  return (
    <Container fluid className="main-content-container px-2 pb-4">
      <Row noGutters className="page-header py-1">
        <PageTitle
          title={t('users.title')}
          subtitle="IDENTITIES"
          className="text-sm-left mb-3"
        />
        <Col sm="1" className="d-flex ml-auto my-auto">
          <ButtonGroup size="sm" className="d-table mx-auto">
            <Button
              theme="primary"
              className="btn-lg"
              onClick={() => handleGoToUserAddPage()}
            >
              <i class="material-icons">add</i> Add
            </Button>
          </ButtonGroup>
        </Col>
      </Row>
      <Card className="p-0">
        <CardHeader className="p-0">
          <Container fluid className="file-manager__filters border-bottom">
            <Row>
              <Col className="file-manager__filters__rows d-flex" md="6">
                <span>Show</span>
                <FormSelect
                  size="sm"
                  value={pageSize}
                  onChange={handlePageSizeChange}
                >
                  {pageSizeOptions.map((size, idx) => (
                    <option key={idx} value={size}>
                      {size} rows
                    </option>
                  ))}
                </FormSelect>
              </Col>
              <Col className="file-manager__filters__search d-flex" md="6">
                <InputGroup seamless size="sm" className="ml-auto">
                  <InputGroupAddon type="prepend">
                    <InputGroupText>
                      <i className="material-icons">search</i>
                    </InputGroupText>
                  </InputGroupAddon>
                  <FormInput onChange={handleFilterSearch} />
                </InputGroup>
              </Col>
            </Row>
          </Container>
        </CardHeader>
        <CardBody className="p-0">
          <div className="">
            <ReactTable
              columns={tableColumns}
              data={data}
              pageSize={pageSize}
              showPageSizeOptions={false}
              resizable={false}
            />
          </div>
        </CardBody>
      </Card>
    </Container>
  );
};
function mapStateToProps(state) {
  return {
    users: state.users
  };
}
export default UserListPage;
