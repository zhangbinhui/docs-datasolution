# 报表数据接口使用手册

## 概述

报表数据接口实现了 **将报表的查询与写入等操作封装为标准化接口**，供外部系统和开发者调用，简化了外部系统与内部数据的集成流程，提高了数据交换的效率、灵活性、可靠性和安全性，并降低系统间集成的复杂性，从而助力实现更加高效的数据流通和智能决策。



## 指南

### 一、接口配置

接口配置的列表展示了已配置报表数据接口的报表，用户可以在列表中查看报表接口的输出参数以及输入参数。

- 查询接口状态：字段值为**有效**的情况下，该报表的查询接口才允许被调用，支持用户自定义；

- 查询接口入参：报表的查询条件对应的是查询接口的输入参数，如果报表的查询条件存在变动，接口的输入参数也会随之产生变化，此时可以使用**同步入参**按钮手动更新参数；

- 查询接口出参：查询接口输出参数对应的是报表查询接口响应的字段，响应的字段可以在**接口出参维护**菜单中进行维护；

- 报表定义支持写入：报表定义中存在新增操作时，该字段值为**是**，否则字段值为**否**，字段值由系统生成；

- 写入接口状态：字段值为**有效**的情况下，该报表的写入接口才允许被调用，支持用户自定义；

- 写入接口参数：写入接口对应的是报表的新增操作，写入接口参数则为报表新增时需要填写的数据信息；

![image-20250313225224207](./dsi-media/image-20250313225224207.png)



#### 1. 内置接口

接口区分为**内置接口**以及**自定义接口**。

内置接口是系统预设的各家通用接口，可以为类似掌厅这样的第三方提供服务，掌厅需要的数据接口基本可以开箱即用。

::: tip
内置接口部分不建议期货公司修改，由德索统一维护，后续会增加实时数据接口；
:::

目前系统中定义的内置接口如下：

``` 
- 结算银行卡： http(s)://ip/crm/reportapi/v1/query/bankacct
- 银期签约关系： http(s)://ip/crm/reportapi/v1/query/bankreg
- 基本信息： http(s)://ip/crm/reportapi/v1/query/investorinfo
- 交易编码： http(s)://ip/crm/reportapi/v1/query/investorCustno
- 成交表： http(s)://ip/crm/reportapi/v1/query/bargain
- 实时资金表： http(s)://ip/crm/reportapi/v1/query/avail
- 居间人信息： http(s)://ip/crm/reportapi/v1/query/brokerInfo
``` 

#### 2. 自定义接口

##### 2.1 接口配置

用户可以根据需要自行添加需要操作的报表。

1. 首先，添加接口配置前，用户需要明确当下要操作的报表名称或者是报表编号。

   ![image-20250314091824803](./dsi-media/image-20250314091824803.png)

2. 点击新增按钮。

   ![image-20250314103653392](./dsi-media/image-20250314103653392.png)

3. 进入新增界面后，填写报表信息。

   1. 接口编号由用户自定义，存在唯一性校验，接口编号会拼接到请求url中使用，建议接口编号使用英文字母和驼峰命名法；
   2. 选择相应报表的报表编号，报表编号支持根据编号或名称进行模糊查询；
   3. 根据需要设置报表的查询接口状态和写入接口状态是否有效，查询接口对应报表的查询操作，写入接口则对应报表的新增操作；
   4. 目前已支持德索与知客的数据源，用户可以根据需要选择相应的数据源；

   > 写入接口状态有效启用的前提是报表支持新增操作。

   ![image-20250314093815223](./dsi-media/image-20250314093815223.png)

4. 保存之后能够在列表中查询到用户新增的接口配置，此时一并会为接口生成接口文档，可以在文档菜单中查看使用。

   ![image-20250314094108363](./dsi-media/image-20250314094108363.png)



##### 2.2 接口出参维护

用户可以根据需要自定义接口输出参数。如自定义字段对应的参数，参数代码则为接口响应结果中的字段key；是否启用则可以自定义该字段是否在输出结果中显示。

> 默认情况下所有字段都为**不启用**状态，不启用的字段在接口调用结果中不会返回该字段。

- 启用前，在接口的配置中查询接口出参，结果为空。

  ![image-20250314095144006](./dsi-media/image-20250314095144006.png)

  ![image-20250314095315203](./dsi-media/image-20250314095315203.png)

- 启用后，接口配置中的查询接口出参，能查询到维护的出参。

  ![image-20250314095323605](./dsi-media/image-20250314095323605.png)

  ![image-20250314095339956](./dsi-media/image-20250314095339956.png)



#### 3. 接口异常参数查询

当报表存在改动时，会对相应接口产生影响，此时用户可以先在当前菜单中查询接口参数是否有异常情况，并根据需要及时对报表进行修改，或重新维护参数。

例如：

- 报表的表头中删除了字段`年龄`，字段被删除后，查询结果中理应不能再出现该字段，此时则能从接口异常参数中查询到该报表的字段出现了异常，并在接口出参维护中也观察到了该字段异常。

  ![image-20250314110747503](./dsi-media/image-20250314110747503.png)

  ![image-20250314110839025](./dsi-media/image-20250314110839025.png)

- 为保证接口正常调用，我们可以选择去掉该异常字段，将已删除字段`年龄`的启用状态设置为**否**，即可将删除字段从输出参数中去除，此时接口参数正常。

  ![image-20250314111347546](./dsi-media/image-20250314111347546.png)

  

### 二、接口用户管理

外部调用报表数据接口时，需要在请求头中增加认证信息 *（参考接口文档中的接口调用）*，用户可以在此菜单中维护可以获取认证信息的用户。

用户来源于crm的账号，数据接口的查询权限与该账号的部门权限相对应，系统会为添加的用户生成一个API_KEY，获取认证信息时则需要用到用户的账号和API_KEY。

![image-20250314101949847](./dsi-media/image-20250314101949847.png)

例如：

使用上图中用户请求登录接口，相应登录接口输入参数则为：

```json
{
    "username":"M001",
    "password":"d1eaf0a8fe3ba223b0b76"
}
```



### 三、日志查询

数据接口访问日志中记录报表数据接口的调用情况。

![image-20250314102703852](./dsi-media/image-20250314102703852.png)



### 四、数据接口工具

#### 1. 在线SQL

该工具用于创建报表时，对报表中的查询语句进行校验。

> 查询结果默认最多仅展示10条。支持使用占位符`${}`，以及报表定义中的其他语法。

![image-20250314131132882](./dsi-media/image-20250314131132882.png)

#### 2. 数据字典

该工具用于创建报表时，查询相关表信息。

![image-20250314131346154](./dsi-media/image-20250314131346154.png)

#### 3. 数据字典维护

该工具用于维护数据字典中，支持查询表结构的数据库表。

![image-20250314131529495](./dsi-media/image-20250314131529495.png)



### 五、接口文档

接口配置之后会自动生成接口文档，接口文档中展示了已配置接口的详细信息，包括输入输出参数，以及参数的具体信息，用户亦可以通过**文档维护**自定义维护接口文档，并且支持文档下载。

![image-20250314103445848](./dsi-media/image-20250314103445848.png)

**文档维护**

> 用户手动维护的文档使用markdown格式，如果在文档中配置当前系统的主机和端口号可以使用占位符`%serverIp%`

![image-20250314104228357](./dsi-media/image-20250314104228357.png)



#### 1. 在线调试

文档中的接口支持在系统中进行在线调试，从接口文档的标题中的 **在线调试** 可以跳转到调试界面。

::: tip
系统内调试可以忽略请求头的认证信息。
:::




![image-20250314155205086](./dsi-media/image-20250314155205086.png)

![image-20250314104527397](./dsi-media/image-20250314104527397.png)

#### 2. 接口调用

2.1 **获取认证信息**。外部调用接口需要先获取认证信息，从**接口用户管理**中获取支持调用接口的用户信息，构建请求体，按照登录接口路径进行调用。

   ![image-20250314155109949](./dsi-media/image-20250314155109949.png)

   ```curl
   curl --location --request POST 'http://ip:port/crm/login/jwt' \
   --header 'Content-Type: application/json' \
   --data '{
       "username":"M001",
       "password":"d1eaf0a8fe3ba223b0b76"
   }'
   ```

   调用结果：

   ![image-20250314105348294](./dsi-media/image-20250314105348294.png)

2.2 **构建请求接口**。请求路径可以从接口文档中获取，其次从登录接口的响应头中获取**Authorization**，并将认证信息加入待调用接口的请求头中，完成接口调用。

   - 查询接口

   ![image-20250314155325786](./dsi-media/image-20250314155325786.png)

   ```curl
   curl --location --request POST 'http://ip:port/crm/reportapi/v1/query/myCustomReport' \
   --header 'Authorization: Bearer eyJraWQiOiJiM2I2YzdiYS1hNmFiLTQxNGMtYTNjMC0zYTE3ZDM0MTE2MTEiLCJhbGciOiJSUzI1NiJ9.eyJzdWIiOiJNMDAxIiwiZXhwIjoxNzQxOTYzOTE1LCJpYXQiOjE3NDE5MjA3MTUsImp0aSI6ImQ2Mzg1N2RkLWJkNDAtNDNkZC1hMTExLTIyMGI2NWZiOWJlYyJ9.R-T3AoSGwFU2IeeYoeduBpynxteej4HUI3JFOKqTEdC5JG9KpeNjpps9AGUH9IezzxiJpVOiXvVJLaNCBPR53oBEuGvPfpZvLz2whM81ePP8CUaiLlszXXpxsMSyuRiDw677ha-mgK9TM7t4DeD86LWvLTBy6SrPXE4S9Rgo_rXN66cOGcZHzj3ULs7QquJO1nfibrj-gNQKCA8ogrPFcrfPFfVmxslmoJmndk8Qze5Ab2rTv_gJTwxzoierMVh01cgxEnPYTm4diqdAHvQNirloK-5c9Eha_t_nEfaZyJBmRdn5D-CXzC-mQ4zYgZlTHIHnK_1Gc6KgRGA4FZ5HDw' \
   --header 'Content-Type: application/json' \
   --data '{
       "searchitems": {
           "NAME": "",
           "AGE": ""
       },
       "params": {
           "first": 0
       },
       "size": "10",
       "current": "1",
       "orders": ""
   }'
   ```

   调用结果：

   ![image-20250314105720988](./dsi-media/image-20250314105720988.png)

   - 写入接口

     ![image-20250314155748662](./dsi-media/image-20250314155748662.png)

     ```curl
     curl --location --request POST 'http://ip:port/crm/reportapi/v1/add/myCustomReport' \
     --header 'Authorization: Bearer eyJraWQiOiJiM2I2YzdiYS1hNmFiLTQxNGMtYTNjMC0zYTE3ZDM0MTE2MTEiLCJhbGciOiJSUzI1NiJ9.eyJzdWIiOiJNMDAxIiwiZXhwIjoxNzQxOTYzOTE1LCJpYXQiOjE3NDE5MjA3MTUsImp0aSI6ImQ2Mzg1N2RkLWJkNDAtNDNkZC1hMTExLTIyMGI2NWZiOWJlYyJ9.R-T3AoSGwFU2IeeYoeduBpynxteej4HUI3JFOKqTEdC5JG9KpeNjpps9AGUH9IezzxiJpVOiXvVJLaNCBPR53oBEuGvPfpZvLz2whM81ePP8CUaiLlszXXpxsMSyuRiDw677ha-mgK9TM7t4DeD86LWvLTBy6SrPXE4S9Rgo_rXN66cOGcZHzj3ULs7QquJO1nfibrj-gNQKCA8ogrPFcrfPFfVmxslmoJmndk8Qze5Ab2rTv_gJTwxzoierMVh01cgxEnPYTm4diqdAHvQNirloK-5c9Eha_t_nEfaZyJBmRdn5D-CXzC-mQ4zYgZlTHIHnK_1Gc6KgRGA4FZ5HDw' \
     --header 'Content-Type: application/json' \
     --data '{
         "map": {
             "ID": "20250314",
             "NAME": "20250314",
             "AGE": "20250314"
         },
         "params": {
             "_id": "",
             "_mode": 1
         }
     }'
     ```

     调用结果：

     ![image-20250314155908599](./dsi-media/image-20250314155908599.png)