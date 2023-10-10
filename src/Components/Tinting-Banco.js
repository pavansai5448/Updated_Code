import {useState} from "react";
import { ToastContainer,toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { useForm } from "antd/es/form/Form";
import './Form.css'
import { Button , Form ,Input,InputNumber ,Select} from 'antd';

import {CheckOutlined} from '@ant-design/icons';

const Tinting = ({username}) => {
    const [isPending,setIsPending]=useState(false)
     
     const handleSubmit=(e)=>{
         e.preventDefault();
         setIsPending(true)
         const date = new Date();
         let day = date.getDate();
         let month = date.getMonth() + 1;
         let year = date.getFullYear();
         toast('Data is being saved', {
             position: "top-center",
             autoClose: 50,
             hideProgressBar: false,
             closeOnClick: true,
             pauseOnHover: true,
             draggable: true,
             progress: undefined,
             theme: "light",
             });
         
        //  console.log(JSON.stringify(data))
        //  fetch('http://localhost:5147/api/tinting/post',{
        //      method:'POST',
        //      headers:{"content-Type":"application/json"},
        //      body:JSON.stringify(data)
        //  }).then(()=>{
        //      setIsPending(false);
        //  })
            // }
        }
    const [FormInsert] = useForm()

    const InsertForm = () => {

    }
    return (
    <>
    
        <h1 className="text-center">Tinting Banco</h1>
        {/* <h3 className="enter-details">Enter Details:</h3> */}
        <div className="container-fluid mt-5">
            <Form form={FormInsert} className="FormMainClass"  onSubmit={handleSubmit}>
                <div className= "row "> 

                    <div className="col-lg-3 col-md-4">
                        <div className="card border border-dark border-2 rounded p-2 m-2 shadow FormCard">
                            
                                <Form.Item label="Sno:" name={"Sno"} rules={[
                                {
                                    required: true,
                                    message: 'Please  give a Input',
                                }
                            ]}>
                                    <InputNumber style={{ width: '100%' }}  allowClear 
                                required/>
                                </Form.Item>
                            
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-4">
                        <div className="card border border-dark border-2 rounded p-2 m-2">
                            <div className="form-group">
                                <Form.Item label="Date:" name={"Date"} rules={[
                                {
                                    required: true,
                                    message: 'Please  give a Input',
                                }
                            ]}> 
                                    <Input style={{ width: '100%' }} allowClear required/>
                                </Form.Item>

                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-4">
                        <div className="card border border-dark border-2 rounded p-2 m-2">
                            <div className="form-group">
                                <Form.Item label="Name Of Project:" name={"nameofp"} rules={[
                                {
                                    required: true,
                                    message: 'Please  give a Input',
                                }
                            ]}> 
                                    <Input style={{ width: '100%' }} className="form-control"    maxLength={20} allowClear required/>
                                </Form.Item>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-4">
                        <div className="card border border-dark border-2 rounded p-2 m-2">
                            <div className="form-group">
                                <Form.Item label="Fandeck:" name={"fandeck"} rules={[
                                {
                                    required: true,
                                    message: 'Please  give a Input',
                                }
                            ]}> 
                                    <Input style={{ width: '100%' }}  maxLength={40} className="form-control"     allowClear required/>
                                </Form.Item>
                            </div>
                        </div>
                    </div>
                
                    <div className="col-lg-3 col-md-4">
                        <div className="card border border-dark border-2 rounded p-2 m-2">
                            <div className="form-group">
                                <Form.Item label="Shade Code:" name={"shadec"} rules={[
                                {
                                    required: true,
                                    message: 'Please  give a Input',
                                }
                            ]}> 
                                    <Input style={{ width: '100%' }}   maxLength={40} className="form-control"   allowClear required/>
                                </Form.Item>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-4">
                        <div className="card border border-dark border-2 rounded p-2 m-2">
                            <div className="form-group">
                                <Form.Item label="Shade Name:" name={"shaden"} rules={[
                                {
                                    required: true,
                                    message: 'Please  give a Input',
                                }
                            ]}> 
                                    <Input style={{ width: '100%' }}  maxLength={20} className="form-control"   allowClear required/>
                                </Form.Item>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-4">
                        <div className="card border border-dark border-2 rounded p-2 m-2">
                            <div className="form-group">
                                <Form.Item label="Product:" name={"product"}rules={[
                                {
                                    required: true,
                                    message: 'Please  give a Input',
                                }
                            ]}> 
                                    <Input style={{ width: '100%' }}    maxLength={20} className="form-control"    allowClear required/>
                                </Form.Item>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-4">
                        <div className="card border border-dark border-2 rounded p-2 m-2">
                            <div className="form-group">
                                <Form.Item label="Base:" name={"base"}rules={[
                                {
                                    required: true,
                                    message: 'Please  give a Input',
                                }
                            ]}>
                                    <Input style={{ width: '100%' }}  maxLength={20} className="form-control"     allowClear required/>
                                </Form.Item>
                            </div>
                        </div>
                    </div>
                
                    <div className="col-lg-3 col-md-4">
                        <div className="card border border-dark border-2 rounded p-2 m-2">
                            <div className="form-group">
                                <Form.Item label="Base Batch Number:" name={"bbn"} rules={[
                                {
                                    required: true,
                                    message: 'Please  give a Input',
                                }
                            ]}> 
                                    <Input style={{ width: '100%' }}  maxLength={10} className="form-control"   allowClear required/>
                                </Form.Item>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-4">
                        <div className="card border border-dark border-2 rounded p-2 m-2">
                            <div className="form-group">
                                <Form.Item label="Formulation for 1L:" name={"formulation"} rules={[
                                {
                                    required: true,
                                    message: 'Please  give a Input',
                                }
                            ]}> 
                                    <Input style={{ width: '100%' }} maxLength={40} className="form-control"    allowClear required/>
                                </Form.Item>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-4">
                        <div className="card border border-dark border-2 rounded p-2 m-2">
                            <div className="form-group">
                                <Form.Item label="Quantity Tinted in Litres:" name={"qt"} rules={[
                                {
                                    required: true,
                                    message: 'Please  give a Input',
                                }
                            ]}> 
                                    <InputNumber style={{ width: '100%' }} min={0} max={100000} className="form-control"  allowClear required/>
                                </Form.Item>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-4">
                        <div className="card border border-dark border-2 rounded p-2 m-2">
                            <div className="form-group">
                                <Form.Item label="Reference/S/C:" name={"ref"} rules={[
                                {
                                    required: true,
                                    message: 'Please  give a Input',
                                }
                            ]}>  
                                    <Select className="form-control"   allowClear required>
                                        <Select.Option value="">Select</Select.Option>
                                        <Select.Option value="reference">Reference</Select.Option>
                                        <Select.Option value="std">Standard</Select.Option>
                                        <Select.Option value="cust">Customized</Select.Option>
                                    </Select>
                                </Form.Item>
                            </div>
                        </div>
                    </div>
                
                    <div className="col-lg-3 col-md-4">
                        <div className="card border border-dark border-2 rounded p-2 m-2">
                            <div className="form-group">
                                <Form.Item label="Project/Retail:" name={"proj"} rules={[
                                {
                                    required: true,
                                    message: 'Please  give a Input',
                                }
                            ]}> 
                                    <Select className="form-control"  allowClear required>
                                        <Select.Option value="">Select Project or Retail</Select.Option>
                                        <Select.Option value="pr">Project</Select.Option>
                                        <Select.Option value="ret">Retail</Select.Option>
                                    </Select>
                                </Form.Item>
                            </div> 
                        </div>      
                    </div>
                    <div className="col-lg-3 col-md-4">
                        <div className="card border border-dark border-2 rounded p-2 m-2">
                            <div className="form-group">
                                <Form.Item label="Shade Match Confirmation:" name={"smc"} rules={[
                                {
                                    required: true,
                                    message: 'Please  give a Input',
                                }
                            ]}> 
                                    <Select className="form-control"   allowClear required>
                                        <Select.Option value="">Select Yes or No</Select.Option>
                                        <Select.Option value="yes">YES</Select.Option>
                                        <Select.Option value="no">NO</Select.Option>
                                    </Select>
                                </Form.Item>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-4">
                        <div className="card border border-dark border-2 rounded p-2 m-2">
                            <div className="form-group">
                                <Form.Item label="Shade Patch/Swatch:" name={"sps"} rules={[
                                {
                                    required: true,
                                    message: 'Please  give a Input',
                                }
                            ]}> 
                                <   Input style={{ width: '100%' }} maxLength={40} className="form-control"    allowClear required/>
                                </Form.Item>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-4">
                        <div className="card border border-dark border-2 rounded p-2 m-2">
                            <div className="form-group">
                                <Form.Item label="Other Observations:" name={"ob"} rules={[
                                {
                                    required: true,
                                    message: 'Please  give a Input',
                                }
                            ]}>
                                    <Input style={{ width: '100%' }}   maxLength={40} className="form-control"    allowClear required/>
                                </Form.Item>
                            </div>
                        </div>
                    </div>
                
                    <div className="col-lg-3 col-md-4">
                        <div className="card border border-dark border-2 rounded p-2 m-2">
                            <div className="form-group">
                                <Form.Item label="Dispensing Machine:" name={"dp"} rules={[
                                {
                                    required: true,
                                    message: 'Please  give a Input',
                                }
                            ]}> 
                                    <Input style={{ width: '100%' }} maxLength={40} className="form-control"   allowClear required/>
                                </Form.Item>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-2 px-0 m-2">
                        <Form.Item className="FormButtonClass" >
                                    <Button type="primary" danger onClick={() => FormInsert.resetFields()}>Cancel </Button>
                                    <Button type="primary" htmlType="submit" style={{ marginLeft: '10px' }}>Save</Button>
                        </Form.Item>
                    </div>
                </div> 
            
            </Form>
        </div>
        <ToastContainer />
    </>

    );

}

export default Tinting;