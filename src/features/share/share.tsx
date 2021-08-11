import { Form, Input, Button } from "antd";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { addMovie } from "../../store/movies/moviesSlice";
function validateYouTubeUrl(url: string) {
  if (url != undefined || url != "") {
    var regExp =
      /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=|\?v=)([^#\&\?]*).*/;
    var match = url.match(regExp);
    return match && match[2].length == 11
  }
  return false
}

export const Share = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const onFinish = (values: any) => {
    dispatch(addMovie({ url: values.url }));
    history.push("/");
  };

  const onFinishFailed = (errorInfo: any) => {};

  return (
    <div>
      <Form
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
      >
        <fieldset>
          <legend>Share a Youtube movie</legend>
          <Form.Item
            label="Youtube url"
            name="url"
            rules={[{ required: true, message: "Please input youtube url!" },  {
                validator: (rule: any, value: string, cb: (msg?: string) => void) => {
                    !validateYouTubeUrl(value) ? cb("Invalid youtube url") : cb();
                }
              }]}
          >
            <Input />
          </Form.Item>

          <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </fieldset>
      </Form>
    </div>
  );
};
