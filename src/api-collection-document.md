**${1:获取什么东西的列表}**
----
  ${2:获取什么东西的列表的json数据.}

* **URL**

  /${3:users}

* **Method:**

  `${4:GET}`

*  **URL Params**

   **Required:**

   `parent_id=[integer]`
   `parent_type=[string]`

* **Data Params**

  None

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** `{ id : 12, name : "Michael Bloom" }`
<pre>
{
  "request":"/${3:users}/1234",
  "errorCode":${6:200},
  "errorMessage": "${7:操作成功}",
  "data":[
    {
      nid : 12,
      ${8:name : "Michael Bloom"}
    }
  ]
}
</pre>

* **Error Response:**

  * **Code:** 404 NOT FOUND <br />
    **Content:** `{ error : "${5:Users} doesn't exist" }`

  OR

  * **Code:** 401 UNAUTHORIZED <br />
    **Content:** `{ error : "You are unauthorized to make this request." }`

* **Sample Call:**

  ```javascript
    $.ajax({
      url: "/${3:users}",
      dataType: "json",
      type : "${4:GET}",
      success : function(r) {
        console.log(r);
      }
    });
  ```
