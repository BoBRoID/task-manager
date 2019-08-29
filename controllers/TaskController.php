<?php


namespace app\controllers;


use app\models\Task;
use yii\data\DataFilter;
use yii\rest\ActiveController;

class TaskController extends ActiveController
{

    public $modelClass = Task::class;

    public function actions()
    {
        $defaultActions = parent::actions();

        $defaultActions['index'] = [
            'class'         =>  'yii\rest\IndexAction',
            'modelClass'    =>  $this->modelClass,
            'checkAccess'   =>  [$this, 'checkAccess'],
            'dataFilter'    =>  [
                'class'         =>  DataFilter::class,
                'searchModel'   =>  function () {
                    return (new \yii\base\DynamicModel(['isSolved' => 0]))
                        ->addRule('isSolved', 'boolean');
                },
            ]
        ];

        return $defaultActions;
    }

    public function behaviors()
    {
        $behaviors = [
            /*'access' => [
                'class' => AccessControl::class,
                'rules' => [
                    [
                        'allow' => true,
                        'roles' => ['@'],
                    ],
                ],
            ],*/
            'corsFilter'    =>  [
                'class' =>  \yii\filters\Cors::class,
                'cors'  =>  [
                    'Origin'                            =>  ['http://localhost:8080', 'http://localhost:8081'],
                    'Access-Control-Allow-Credentials'  =>  true,
                    'Access-Control-Request-Headers'    =>  ['content-type'],
                    'Access-Control-Max-Age'            =>  3600,
                    'Access-Control-Allow-Methods'      =>  ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
                    'Access-Control-Request-Method'     =>  ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],

                ]
            ]
        ];

        return array_merge(parent::behaviors(), $behaviors);
    }

}