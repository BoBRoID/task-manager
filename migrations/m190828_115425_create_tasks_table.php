<?php

use yii\db\Migration;

/**
 * Handles the creation of table `{{%tasks}}`.
 */
class m190828_115425_create_tasks_table extends Migration
{
    /**
     * {@inheritdoc}
     */
    public function safeUp()
    {
        $this->createTable('{{%tasks}}', [
            'id'        =>  $this->primaryKey()->unsigned(),
            'userId'    =>  $this->integer()->unsigned()->notNull(),
            'title'     =>  $this->text(),
            'content'   =>  $this->text(),
            'createdAt' =>  $this->integer()->unsigned()->notNull(),
            'isSolved'  =>  $this->boolean()->unsigned()->notNull()->defaultValue(0)
        ]);
    }

    /**
     * {@inheritdoc}
     */
    public function safeDown()
    {
        $this->dropTable('{{%tasks}}');
    }
}
